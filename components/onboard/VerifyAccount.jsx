import React, { useState, useRef, useEffect } from "react";

function VerifyAccount() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  // Focus the next input field if a digit is entered
  useEffect(() => {
    inputsRef.current.forEach((input, index) => {
      input.addEventListener("keydown", (e) => handleKeyDown(e, index));
      input.addEventListener("input", (e) => handleInput(e, index));
      input.addEventListener("focus", handleFocus);
      input.addEventListener("paste", handlePaste);
    });

    return () => {
      inputsRef.current.forEach((input, index) => {
        input.removeEventListener("keydown", (e) => handleKeyDown(e, index));
        input.removeEventListener("input", (e) => handleInput(e, index));
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("paste", handlePaste);
      });
    };
  }, []);

  const handleKeyDown = (e, index) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    } else if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      if (otp[index] === "") {
        if (index > 0) {
          setOtp((prev) => {
            const newOtp = [...prev];
            newOtp[index - 1] = "";
            return newOtp;
          });
          inputsRef.current[index - 1].focus();
        }
      } else {
        setOtp((prev) => {
          const newOtp = [...prev];
          newOtp[index] = "";
          return newOtp;
        });
      }
    }
  };

  const handleInput = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]{0,1}$/.test(value)) {
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[index] = value;
        return newOtp;
      });
      if (index < inputsRef.current.length - 1 && value) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (/^[0-9]{4}$/.test(text)) {
      const digits = text.split("");
      setOtp(digits);
      if (digits.length === 4) {
        inputsRef.current[3].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with OTP:", otp.join(""));
  };

  return (
    <>
      <div className="pb-6">
        <h1 className="text-3xl text-center py-4">Verify Your Account</h1>
        <p className="text-center text-gray-500">Please Enter the OTP sent to your email address</p>
      </div>
      <div>
        <form id="otp-form" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={handleFocus}
                onPaste={handlePaste}
                ref={(el) => (inputsRef.current[index] = el)}
                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                pattern="\d*"
                maxLength="1"
              />
            ))}
          </div>
          {/* The following submit button is optional and you can add or style it as needed */}
          <button type="submit" className="hidden" />
        </form>
        <div className="text-sm text-slate-500 mt-4 text-center">
          Didn{"'"}t receive code?{" "}
          <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">
            Resend
          </a>
        </div>
      </div>
    </>
  );
}

export default VerifyAccount;
