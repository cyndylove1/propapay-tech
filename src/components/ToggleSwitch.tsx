import React, { useState } from "react";

interface ToggleProps {
  className?: string; 
}

const ToggleSwitch: React.FC<ToggleProps> = ({ className  }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`relative  cursor-pointer rounded-full ${
        isOn ? "bg-[#12725B]" : "bg-[#F2F6FF]"
      } ${className}`} 
    >
      <div
        className={`absolute left-1 top-1/2 h-[14px] w-[14px] -translate-y-1/2 transform rounded-full bg-white shadow transition ${
          isOn ? "translate-x-[13px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
