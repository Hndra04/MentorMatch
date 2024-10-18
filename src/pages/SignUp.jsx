import React, { useState } from "react"; // Importing React and useState
import Footer from "../components/Footer"; // Importing Footer component
import Header from "../components/Header"; // Importing Header component

const SignUp = () => {
  // State variables for form inputs
  const [firstName, setFirstName] = useState(""); // State for first name
  const [lastName, setLastName] = useState(""); // State for last name
  const [countryCode, setCountryCode] = useState(""); // State for country code
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [termsAgreed, setTermsAgreed] = useState(false); // State for terms agreement

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Handle signup logic here, e.g., API call
    console.log("Sign-up data submitted:", {
      firstName,
      lastName,
      countryCode,
      phoneNumber,
      email,
      password,
      termsAgreed,
    });
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-6">
          {/* Left Side - Text and Logo */}
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-6xl font-bold mb-2">Sign-up</h1>
            <h2 className="text-6xl font-bold mb-4">to a great cause.</h2>
            <p className="text-4xl font-semibold mb-6">
              Let's make the world a better place.
            </p>
            {/* Logo */}
            <div className="flex justify-center md:justify-center">
              <img
                src="/assets/Icons/Logo.png"
                alt="Lend-a-Hand Logo"
                className="h-60 filter invert sepia(0%) saturate(0%) hue-rotate(-180deg) brightness(100%)"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-md"
                  value={firstName} // Bind state to input
                  onChange={(e) => setFirstName(e.target.value)} // Update state on change
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-md"
                  value={lastName} // Bind state to input
                  onChange={(e) => setLastName(e.target.value)} // Update state on change
                />
              </div>
              <div className="flex items-center gap-4">
                {/* Country Code Dropdown */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <select
                      value={countryCode} // Bind state to select
                      onChange={(e) => setCountryCode(e.target.value)} // Update state on change
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500"
                    >
                      <option value="+62">🇮🇩 +62</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+81">🇯🇵 +81</option>
                      {/* Add more country codes as necessary */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M7 10l5 5 5-5H7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="08XX-XXXX-XXXX"
                  className="w-full p-3 border rounded-md"
                  value={phoneNumber} // Bind state to input
                  onChange={(e) => setPhoneNumber(e.target.value)} // Update state on change
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md"
                value={email} // Bind state to input
                onChange={(e) => setEmail(e.target.value)} // Update state on change
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-md"
                value={password} // Bind state to input
                onChange={(e) => setPassword(e.target.value)} // Update state on change
              />

              <div className="mb-4">
                <div className="flex items-center">
                  {/* Flexbox for checkbox and label */}
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2" // Margin to right for spacing
                    checked={termsAgreed} // Bind state to checkbox
                    onChange={() => setTermsAgreed(!termsAgreed)} // Toggle state on change
                  />
                  <label htmlFor="terms" className="text-gray-700 font-bold">
                    I agree to the Terms and Conditions
                  </label>
                </div>
                <p className="text-gray-700">
                  You must agree to the Terms and Conditions before signing up
                  for an account.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
              >
                SIGN UP
              </button>

              <p className="text-center text-gray-600">
                Already have an account?{" "}
                <a href="/login-page" className="text-blue-500">
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
