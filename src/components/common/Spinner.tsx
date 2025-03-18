import { useState, useEffect } from "react";

const Spinner = () => {
  const dots = Array.from({ length: 8 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [coloredDots, setColoredDots] = useState(Array(8).fill(false));
  const [isRunning, setIsRunning] = useState(true); // Control running state

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % dots.length);
      }, 300);
    }

    // Stop spinning after 3 seconds
    timeout = setTimeout(() => {
      setIsRunning(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRunning]);

  
  useEffect(() => {
    setColoredDots((prev) => {
      const newColors = [...prev];
      newColors[activeIndex] = true; 
      return newColors;
    });
  }, [activeIndex]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex items-center justify-center w-16 h-16 bg-gray-800 rounded-md">
        {dots.map((_, index) => {
          const angle = (index / dots.length) * 2 * Math.PI;
          const x = Math.cos(angle) * 20;
          const y = Math.sin(angle) * 20;

          return (
            <div
              key={index}
              className={`absolute h-2 w-2 rounded-full transition-all duration-200`}
              style={{
                backgroundColor: coloredDots[index] ? "#32B56A" : "white",
                transform: `translate(${x}px, ${y}px)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Spinner;
