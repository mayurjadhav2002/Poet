import React, { useState } from "react";

function ProfileImageUpload({setButtonText}) {
  const [imageSrc, setImageSrc] = useState("");

  const handleFileChange = async(event) => {
    const file = event.target.files[0];
    if (file) {
        setButtonText("Uploading...")
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setButtonText("Next")

      };
      reader.readAsDataURL(file);
    }
    setButtonText("Upload Image")
  };

  return (
    <div className="">
      <div>
        <h1 className="text-3xl text-center py-4">
          To be a Star, Your Image should Shine Like a Star
        </h1>
      </div>
      <div className="flex items-center justify-center w-auto max-w-md mx-auto">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center min-w-48 min-h-48 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          {!imageSrc && (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> <br /> or
                drag and drop
              </p>
            </div>
          )}

          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
}

export default ProfileImageUpload;
