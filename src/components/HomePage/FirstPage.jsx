import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="WebsiteBGL.png"
          alt="placeholder"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 mb-8">
          {/* Heading */}
          <div className="mt-4 md:mt-10">
            <h1 className="text-3xl md:text-5xl font-bold ">
              <span className="text-white ">
                Trade with Purpose:Profit-Driven,
              </span>
              <br />
              <span className="text-[#88b92f]">Community-Focused</span>
              <span className="text-white"> Trading</span>
            </h1>
          </div>

          {/* Logo */}
          <div className="flex justify-end items-center">
            <img
              src="logo.png"
              alt="Quick Funded Logo"
              className="w-48 md:w-96 h-auto object-contain"
            />
          </div>
        </div>

        <p className="text-xl  text-white">
          Join a trading firm that believes in your success – pay only when you
          pass the challenge.
        </p>

        {/* Main Content Section */}

        <div className="flex flex-col lg:flex-row-reverse gap-8 flex-1 text-white mt-10">
          {/* "Pay when you pass" Section */}
          <div className="flex-1 lg:w-1/3 flex flex-col justify-center items-center lg:mr-10 lg:-mt-40 mt-0 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold text-center">
              Pay when <span className="whitespace-nowrap">you</span>
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold text-[#cb6ce6]">
              pass<span className="text-white">!</span>
            </h2>
            <p className="text-lg md:text-xl mt-6 text-center px-4 lg:px-0">
              Building <span className="text-[#88b92f]">CareerTraders</span>,
              Not Just Profits.
            </p>
          </div>

          {/* Money Flow Diagram Section */}
          <div className="flex-2 lg:w-2/3 flex justify-center items-center lg:items-start">
            <div className="max-w-[85%] lg:max-w-lg w-full">
              <img
                src="Packages.png"
                alt="Money Flow Diagram"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      {/* <div className="flex-1 bg-[#88b92f] relative overflow-hidden mt-4">
        <div className="absolute inset-0" />

        <div className="relative z-10 p-6 md:p-8 flex flex-col justify-center items-start h-full">
          <h3 className="text-xl font-bold mb-4 text-white">
            About Our Unique Approach
          </h3>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-black mb-6">
                At Quick Funded, we&apos;re reshaping proprietary trading by
                putting trader&apos;s growth first. Unlike traditional firms, we
                don&apos;t charge upfront for our challenges. Instead, we
                believe in your potential and only ask for payment once you pass
                successfully. This allows you to focus fully on performance,
                without financial pressure. Our goal is to build a community of
                dedicated career traders, where everyone collaborates to achieve
                success and generate real profit.
              </p>

              <Link to="/contact">
                <button className="border-2 border-black text-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors">
                  get started
                </button>
              </Link>
             
            </div>

            <div className="hidden md:flex w-20 h-20 items-center justify-center">
              <img
                src="Hand.png"
                alt="Hand Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex-1 bg-[#88b92f] relative overflow-hidden mt-4">
        <div className="absolute inset-0" />

        <div className="relative z-10 p-6 md:p-8 flex flex-col justify-center h-full">
          <h3 className="text-xl font-bold mb-4 text-white">
            About Our Unique Approach
          </h3>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="text-black mb-6">
                At Quick Funded, we&apos;re reshaping proprietary trading by
                putting trader&apos;s growth first. Unlike traditional firms, we
                don&apos;t charge upfront for our challenges. Instead, we
                believe in your potential and only ask for payment once you pass
                successfully. This allows you to focus fully on performance,
                without financial pressure. Our goal is to build a community of
                dedicated career traders, where everyone collaborates to achieve
                success and generate real profit.
              </p>
            </div>

            <div className="hidden md:flex flex-col items-center gap-2 ">
              <Link to="/contact">
                <button className="border-2 border-black text-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors">
                  get started
                </button>
              </Link>

              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src="Hand.png"
                  alt="Hand Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Mobile button */}
            <div className="md:hidden -mt-6">
              <Link to="/contact">
                <button className="border-2 border-black text-black px-8 py-3  rounded-full font-bold hover:bg-black hover:text-white transition-colors">
                  get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
