"use client";
import ProfileImageUpload from "@/components/onboard/ProfileImageUpload";
import SelectInterest from "@/components/onboard/SelectInterest";
import React from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import VerifyAccount from "@/components/onboard/VerifyAccount";

function Onboarding() {
  const [step, setStep] = React.useState(3);
  const [buttonText, setButtonText] = React.useState("");

  const handleNext = () => {
    if (buttonText === "Next") {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const isNextDisabled = buttonText !== "Next";

  return (
    <div className="flex  gap-3 min-h-screen lg:flex-row xl:flex-row flex-col-reverse ">
      <div className="min-h-screen w-2/6 bg-blue-800"></div>
      <div className="w-full flex flex-col justify-between">
        {/* Step Indicator */}
        <ol className="lg:flex items-center w-full space-y-4 lg:space-y-0 py-5">
          {["What you Like?", "Your Beautiful Smile", "Lets Go"].map((text, index) => {
            const isCurrentStep = step === index + 1;
            return (
              <li key={index} className="flex-1">
                <div
                  className={`flex items-center font-medium px-4 py-5 w-full rounded-lg ${
                    isCurrentStep ? 'bg-indigo-50' : ''
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10 ${
                      isCurrentStep
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-50 border border-gray-200 text-gray-900'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <h4 className={`text-base ${isCurrentStep ? 'text-indigo-600' : 'text-gray-900'}`}>
                    {text}
                  </h4>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Step Content */}
        <div>
          {step === 1 && <SelectInterest setButtonText={setButtonText} />}
          {step === 2 && <ProfileImageUpload setButtonText={setButtonText} />}
          {step === 3 && <VerifyAccount/>}
        </div>

        {/* Action Button */}
        <div className="mb-10 flex justify-end me-10">
          <button
            aria-disabled={isNextDisabled}
            onClick={handleNext}
            className={`bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-10 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50 ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {buttonText || "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
