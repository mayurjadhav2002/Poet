import Link from "next/link";
import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
function RegisterForm({
  handleFormChange,
  handleFormSubmit,
  formData,
  showPassword,
  setShowPassword,
  errors,
}) {
  return (
    <>
      {" "}
      <div className="mx-auto max-w-xs space-y-5">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FiUser className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            className="w-full px-10 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleFormChange}
            value={formData.name}
          />
          {errors.name && (
            <p className="absolute text-xs -mt-2 bg-red-100 px-2 right-0 text-red-800">
              {errors.name}
            </p>
          )}
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <AiTwotoneMail className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            className="w-full px-10 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleFormChange}
            value={formData.email}
          />
          {errors.email && (
            <p className="absolute text-xs -mt-2 bg-red-100 px-2 right-0 text-red-800">
              {errors.email}
            </p>
          )}
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
          {errors.password && (
            <p className="absolute text-xs -mt-2 bg-red-100 px-2 right-0 text-red-800">
              {errors.password}
            </p>
          )}
        </div>
        <button
          onClick={handleFormSubmit}
          className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >
          <svg
            className="w-6 h-6 -ml-2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg>
          <span className="ml-3">Sign Up</span>
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
    </>
  );
}

export default RegisterForm;
