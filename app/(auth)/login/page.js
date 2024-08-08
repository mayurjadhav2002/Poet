"use client";
import LoginForm from "@/components/LoginForm";
import React from "react";
import WithGoogle from "@/components/buttons/WithGoogle";
import WithFacebook from "@/components/buttons/WithFacebook";
import Image from "next/image";
import { z } from "zod";
const userSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

function LoginPage(props) {
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showAnimation, setShowAnimation] = React.useState(false);
  const [errors, setErrors] = React.useState({ email: "", password: "", custom: "" });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowAnimation(true);
    setErrors({ email: "", password: "", custom: "" });
    try {
      userSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});
        setErrors(prev => ({ ...prev, ...newErrors }));
      }else{
        setErrors(prev => ({ ...prev, custom: "An unexpected error occurred" }));
        toast.error("An unexpected error occurred");
      }
    }
  };
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen m-0 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 py-5">
          <div>
            <Image
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32 mx-auto"
              alt="poety logo"
              width={128}
              height={128}
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Login Into Your Account
            </h1>
            <div className="w-full flex-1 mt-8">
              <LoginForm
                handleFormChange={handleFormChange}
                handleFormSubmit={handleFormSubmit}
                formData={formData}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                showAnimation={showAnimation}
                errors={errors} 

              />
              <div className="my-10 border-b text-center">
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

export default LoginPage;
