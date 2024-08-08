import Link from "next/link";
import React, { useState, useRef } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { CiLocationArrow1, CiLock } from "react-icons/ci";
import { FaEyeSlash, FaLocationArrow, FaRegEye } from "react-icons/fa";
import { motion } from "framer-motion";

function LoginForm({
  handleFormChange,
  handleFormSubmit,
  formData,
  showPassword,
  setShowPassword,
  showAnimation,
  errors,
}) {
  return (
    <>
      <div className="mx-auto max-w-xs space-y-5">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <AiTwotoneMail className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            className="w-full px-10 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="text"
            name="email"
            placeholder="Username or Email"
            onChange={handleFormChange}
            value={formData.email}
          />
      {errors.email &&  <p className="absolute text-xs -mt-2 bg-red-100 px-2 right-0 text-red-800">{errors.email}</p>}
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <CiLock className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            className="w-full px-10 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={handleFormChange}
            value={formData.password}
          />
          
          <button
            type="submit"
            className=" absolute inset-y-0  end-0 pe-3.5 "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <FaRegEye className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>
          {errors.password &&  <p className="absolute text-xs -mt-2 bg-red-100 px-2 right-0 text-red-800">{errors.password}</p>}

        </div>

        <button
          onClick={handleFormSubmit}
          className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 focus:shadow-outline focus:outline-none relative"
        >
          <span className="ml-3">Login</span>
          <FaLocationArrow size={30} /> {/* Adjust size if needed */}
        </button>
        <p className="mt-6 text-xs text-gray-600 text-center">
          By signing up, you agree to our
          <Link href="#" className="border-b border-gray-500 border-dotted">
            Terms of Service
          </Link>
          and
          <Link href="#" className="border-b border-gray-500 border-dotted">
            Privacy Policy
          </Link>
        </p>
      </div>
      <motion.div
        className={`absolute bg-primary bg-blue-600 z-50`}
        initial={{
          width: 0,
          height: 0,
          top: "40%",
          left: "40%",
          transformOrigin: "top",
        }}
        animate={
          showAnimation
            ? {
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
                transformOrigin: "top left",
              }
            : {}
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );
}

export default LoginForm;
