"use client";
import LoginForm from "@/components/LoginForm";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { AiTwotoneMail } from "react-icons/ai";

import React from "react";
import Link from "next/link";
import WithGoogle from "@/components/buttons/WithGoogle";
import WithFacebook from "@/components/buttons/WithFacebook";
import Image from "next/image";
import RegisterForm from "@/components/RegisterForm";
import toast from "react-hot-toast";
import { z } from "zod";
const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
function RegisterPage(props) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    password: "",
    custom: "",
  });
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    try {
      userSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});
        setErrors((prev) => ({ ...prev, ...newErrors }));
      } else {
        setErrors((prev) => ({
          ...prev,
          custom: "An unexpected error occurred",
        }));
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen m-0 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 py-5 custom-scrollbar overflow-y-auto">
          <div>
            <Image
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32 mx-auto"
              alt="poety logo"
              width={128}
              height={128}
            />
          </div>
          <div className="mt-2 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Sign up for Poety
            </h1>
            <div className="w-full flex-1 mt-8">
              <RegisterForm
                handleFormChange={handleFormChange}
                handleFormSubmit={handleFormSubmit}
                formData={formData}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                errors={errors}
              />
              <div className="mt-5 mb-10 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  or Use Secure Social login
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <WithGoogle />

                <WithFacebook />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
