import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryDropdown({ selectedCountry, onCountryChange }) {
  const [countries, setCountries] = useState([]);
  const [isCountrySelected, setIsCountrySelected] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      // .get("https://api.first.org/data/v1/countries")
      .then((response) => {
        const countryList = response.data
          .map((country) => country.name.common)
          .sort();
        setCountries(countryList);
        console.log(response);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryChange = (value) => {
    onCountryChange(value);
    setIsCountrySelected(value !== "");
  };

  return (
    <div>
      <label className="block text-sm mb-2">Country</label>
      <select
        name="country"
        value={selectedCountry}
        required
        onChange={(e) => handleCountryChange(e.target.value)}
        className={`w-full px-4 py-2 mb-3 bg-white/10 rounded-2xl border border-gray-600 text-white opacity-60 appearance-none ${
          !isCountrySelected && selectedCountry === "" ? "border-red-500" : ""
        }`}
      >
        <option value="" disabled>
          Select your country
        </option>
        {countries.map((country) => (
          <option key={country} value={country} className="text-black">
            {country}
          </option>
        ))}
      </select>
      {!isCountrySelected && selectedCountry === "" && (
        <p className="text-red-500 text-sm">Please select a country.</p>
      )}
    </div>
  );
}

export default CountryDropdown;
