import { CrossCircledIcon } from "@radix-ui/react-icons";
import React from "react";

// Color mapping using Tailwind color names
const colorMap = {
  Shayari: {
    background: "bg-blue-800/70", // Tailwind color class
    text: "text-white",
    backgroundSelected: "bg-blue-900", // Tailwind color class
    textSelected: "text-white",
  },
  Poetry: {
    background: "bg-red-600/70",
    text: "text-white",
    backgroundSelected: "bg-red-700",
    textSelected: "text-white",
  },
  Books: {
    background: "bg-green-500/70",
    text: "text-white",
    backgroundSelected: "bg-green-600",
    textSelected: "text-white",
  },
  Movies: {
    background: "bg-purple-700/70",
    text: "bg-purple-700",
    backgroundSelected: "bg-purple-800",
    textSelected: "text-white",
  },
  Music: {
    background: "bg-indigo-600/70",
    text: "bg-indigo-600",
    backgroundSelected: "bg-indigo-700",
    textSelected: "text-white",
  },
  Dance: {
    background: "bg-orange-600/70",
    text: "bg-orange-600",
    backgroundSelected: "bg-orange-700",
    textSelected: "text-white",
  },
  Art: {
    background: "bg-gray-500/70",
    text: "bg-gray-900",
    backgroundSelected: "bg-gray-600",
    textSelected: "text-white",
  },
  Photography: {
    background: "bg-purple-600/70",
    text: "bg-purple-600",
    backgroundSelected: "bg-purple-700",
    textSelected: "text-white",
  },
  Travel: {
    background: "bg-yellow-500",
    text: "text-white",
    backgroundSelected: "bg-yellow-600",
    textSelected: "text-white",
  },
  Food: {
    background: "bg-pink-600",
    text: "text-white",
    backgroundSelected: "bg-pink-700",
    textSelected: "text-white",
  },
  Fashion: {
    background: "bg-rose-600",
    text: "text-white",
    backgroundSelected: "bg-rose-700",
    textSelected: "text-white",
  },
  Fitness: {
    background: "bg-teal-600",
    text: "text-white",
    backgroundSelected: "bg-teal-700",
    textSelected: "text-white",
  },
  Sports: {
    background: "bg-blue-600",
    text: "text-white",
    backgroundSelected: "bg-blue-800",
    textSelected: "text-white",
  },
};

const texts = Object.keys(colorMap);

function SelectInterest({ setButtonText }) {
  const [selected, setSelected] = React.useState([]);

  const handleSelect = (text) => {
    if (selected.includes(text)) {
      setSelected(selected.filter((item) => item !== text));
    } else {
      setSelected([...selected, text]);
    }
    setButtonText(
      selected.length + 1 >= 5 ? "Next" : `${selected.length + 1}/5 Selected`
    );
  };

  const isTextSelected = (text) => {
    return selected.includes(text);
  };

  return (
    <>
      <div className="py-4 text-center">
        <h1 className="text-3xl">What like content you would like to see?</h1>
        <p>Select atleast 5 categories</p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {texts.map((text) => {
          const {
            background,
            text: textColor,
            backgroundSelected,
            textSelected,
          } = colorMap[text];
          const isSelected = isTextSelected(text);

          return (
            <div
              key={text}
              className={`flex items-center gap-2 px-5 py-1 cursor-pointer mx-3 my-4 ${
                isSelected ? backgroundSelected : background
              } ${isSelected ? textSelected : textColor} rounded-full`}
              onClick={() => handleSelect(text)}
            >
              {text}
              {isSelected && <CrossCircledIcon className="cursor-pointer" />}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SelectInterest;
