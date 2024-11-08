import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import CountryDropdown from "./CountryDropdown";
import TermsAndConditionsModal from "./TermsAndConditionsModal";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    accountSize: "",
    termsAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleCountryChange = (country) => {
    setFormData((prevData) => ({
      ...prevData,
      country: country, // Update the country in formData directly
    }));
  };

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz_VlkDDGLw-jtAkYMnX1DsmbO6hofZ-03hwtsykqLyu4NNUaAalPxX4e5090p_GPBPgg/exec";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    if (!formData.termsAccepted) {
      setSubmitStatus("Please accept the terms and conditions.");
      setIsSubmitting(false);
      return;
    }

    try {
      const encodedData = {
        name: encodeURIComponent(formData.name),
        email: encodeURIComponent(formData.email),
        country: encodeURIComponent(formData.country),
        phone: encodeURIComponent(formData.phone || ""),
        accountSize: encodeURIComponent(formData.accountSize || ""),
      };

      const queryString = Object.keys(encodedData)
        .map((key) => `${key}=${encodedData[key]}`)
        .join("&");

      const submitUrl = `${SCRIPT_URL}?${queryString}`;

      await fetch(submitUrl, {
        method: "GET",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setFormData({
        name: "",
        email: "",
        country: "",
        phone: "",
        accountSize: "",
        termsAccepted: false,
      });
      setSubmitStatus("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  text-white relative pt-3 overflow-hidden">
      <div className="absolute inset-0 w-full opacity-50 bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1320px] bg-center absolute inset-0" />
        <img
          src="./RegistrationPageBG.png"
          className="w-full h-full object-full"
        />
      </div>

      <div className="relative top-0 z-10 w-screen max-w-[1320px] mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left column - Form */}
        <div className="flex-1 ">
          <div className="flex">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                It begins <span className="text-[#88b92f]">here</span>!
              </h1>
              <p className="mb-8 text-gray-300">
                Fill in your details below to begin your future as a career
                trader with Quick Funded.
              </p>
            </div>

            <div className="absolute right-4">
              <img
                src="./logo.png"
                className="text-white 
      max-w-[150px] lg:max-w-80 md:max-w-48 sm:max-w-[150px]
    "
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mb-3 bg-white/10 rounded-2xl border border-gray-600 text-white"
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mb-3 bg-white/10 rounded-2xl border border-gray-600 text-white"
                  placeholder="Email address"
                />
              </div>
              <CountryDropdown required onCountryChange={handleCountryChange} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <label className="block text-sm mb-2">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mb-3 bg-white/10 rounded-2xl border border-gray-600 text-white"
                  placeholder="Phone number"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Account size</label>
                <select
                  name="accountSize"
                  required
                  value={formData.accountSize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mb-4 bg-white/10 rounded-2xl border border-gray-600 text-white-dull opacity-60"
                >
                  <option value="" disabled className="text-black">
                    Select account size
                  </option>
                  <option value="$10K" className="text-black">
                    $10K
                  </option>
                  <option value="$25K" className="text-black">
                    $25K
                  </option>
                  <option value="$50K" className="text-black">
                    $50K
                  </option>
                  <option value="$100K" className="text-black">
                    $100K
                  </option>
                  <option value="$200K" className="text-black">
                    $200K
                  </option>
                </select>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1"
              />
              <label className="text-sm text-gray-300">
                I agree to the{" "}
                {/* <Link to="terms-conditions">
                  <span className="text-[#88b92f]">Terms and Conditions</span>
                </Link> */}
                <TermsAndConditionsModal>
                  <span className="text-[#88b92f]">Terms and Conditions</span>
                </TermsAndConditionsModal>
              </label>
            </div>
            {/* <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1"
              />
              <label className="text-sm text-gray-300">
                I agree to the <TermsAndConditionsModal />
              </label>
            </div> */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#88b92f] hover:bg-[#88b92f] text-white py-2 rounded-2xl transition-colors disabled:bg-[88b92f]"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {submitStatus && (
              <p
                className={`mt-4 text-center ${
                  submitStatus.includes("Error")
                    ? "text-red-500"
                    : "text-[#88b92f]"
                }`}
              >
                {submitStatus === "Please accept the terms and conditions." ? (
                  <span className="text-red-500">{submitStatus}</span>
                ) : (
                  submitStatus
                )}
              </p>
            )}
          </form>
        </div>

        {/* Right column - Contact */}
        {/* <div className="flex-1 flex flex-col">
     
          <div className="flex mb-8 w-full">
            <img
              src="./moneyflow.png"
              className="w-full max-w-[300px] mt-20 -ml-5 mx-auto"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-[#88b92f]">us</span>
          </h2>
          <p className="text-gray-300 mb-8">
            For questions and technical assistance on this promotion please
            contact us via the contact information provided below.
          </p>

          <div className="space-y-4 w-full">
            <div className="flex items-center gap-3">
              <Phone className="text-[#88b92f]" />
              <span>+44(0) 7307577966</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#88b92f]" />
              <span>support@quick-funded.io</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#88b92f]" />
              <span>128 City Road LONDON EC1V 2NX UNITED KINGDOM</span>
            </div>
          </div>
        </div> */}
        <div className="flex-1 flex flex-col">
          <div className="flex mb-6 w-full justify-center md:justify-end ">
            <img
              src="./moneyflow.png"
              className="w-full max-w-[300px] mt-20 mx-auto md:mr-0 pt-10"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-[#88b92f]">us</span>
          </h2>
          <p className="text-gray-300 mb-8">
            For questions and technical assistance on this promotion please
            contact us via the contact information provided below.
          </p>

          <div className="space-y-4 w-full">
            <div className="flex items-center gap-3">
              <Phone className="text-[#88b92f]" />
              <span>+44(0) 7307577966</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#88b92f]" />
              <span>support@quick-funded.io</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#88b92f]" />
              <span>128 City Road LONDON EC1V 2NX UNITED KINGDOM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
