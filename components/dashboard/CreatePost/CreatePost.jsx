import React, { useRef } from "react";
import "@/styles/create.min.css";
import { ScrollArea } from "@/components/ui/scroll-area";
function CreatePost() {
  const textareaRef = useRef(null);

  const handleChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
    }
  };
  return (
    <ScrollArea
      type="always"
      scrollbars="vertical"
      className="w-full"
      style={{ height: "100vh" }}
    >
      <div className="px-5 mt-5 w-full">
        <textarea
          ref={textareaRef}
          className="notes"
          onChange={handleChange}
          placeholder="Write something..."
        />
      </div>
    </ScrollArea>
  );
}

export default CreatePost;
