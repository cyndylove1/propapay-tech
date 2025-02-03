import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev : number) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/login"), 500); 
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="mt-[30px] flex items-center justify-center ">
      <div className="w-[280px]">
        <div className="h-[8px] rounded-xl bg-[#f5f6f6] overflow-hidden">
          <div
            className="h-full bg-[#12725b] rounded-xl transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
