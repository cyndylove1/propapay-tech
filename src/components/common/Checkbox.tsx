import { useState } from "react";
import { BiSquareRounded } from "react-icons/bi";
import { PiCheckSquareFill} from "react-icons/pi";

const Checkbox = () => {
     const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsChecked(!isChecked)}
        className="text-xl cursor-pointer"
      >
        {isChecked ? (
          <PiCheckSquareFill className="h-[20px] w-[20px] text-[#12725b]" />
        ) : (
          <BiSquareRounded className="h-[20px] w-[20px] text-[#1C1D1E1F]" />
        )}
      </div>
    </>
  );
};
export default Checkbox;
