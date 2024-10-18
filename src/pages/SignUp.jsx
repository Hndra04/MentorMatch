import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SignUp = () => {
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
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="flex items-center gap-4">
                {/* Country Code Dropdown */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500">
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
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-md"
              />

              <div className="flex items-start">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms" className="ml-2 text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-blue-500">
                    Terms and Conditions
                  </a>
                  .
                </label>
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
