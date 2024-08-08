import React from "react";
import { FaFacebook } from "react-icons/fa";

function WithFacebook({
  onClick,
  buttonText = "Continue with Facebook",
  children,
}) {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-blue-600 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
    >
      <div className="rounded-full p-1 ">
      <FaFacebook className="w-6 h-6" />

      </div>
      <span className="ml-4">
        {buttonText}
        {children}
      </span>
    </button>
  );
}

export default WithFacebook;
