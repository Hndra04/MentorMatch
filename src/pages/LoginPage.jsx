import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-6">
          {/* Left Side - Text and Logo */}
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-6xl font-bold mb-2">Welcome back.</h1>
            <h2 className="text-3xl font-semibold mb-4">Let's continue our mission.</h2>
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
              <a href="#" className="text-blue-500 text-xs">
                I forgot my password
              </a>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
              >
                LOGIN
              </button>

              <p className="text-center text-gray-600">
                No Account Yet?{" "}
                <a href="/login-page" className="text-blue-500">
                  Sign up for an account >
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

export default LoginPage;
