import React from "react";

interface TextAreaProps {
  placeholder?: string;
  id?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({placeholder, id, className }) => {
  return (
    <>
      <div className="">
        <div
          className={`h-[140px] ${className}`}
        >
          <textarea
            id={id}
            placeholder={placeholder}
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default TextArea;
