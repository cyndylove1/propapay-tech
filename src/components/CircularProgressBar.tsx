import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress increase when profile updates
    const interval = setInterval(() => {
      setProgress((prev:number) => (prev < 70 ? prev + 10 : 70)); // Stop at 70%
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[64px] h-[64px]">
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          textSize: "16px",
          pathColor: "#FFF", // Dark gray color
          textColor: "#FFF",
          trailColor: "#549888", // Light gray
          strokeLinecap: "round",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
