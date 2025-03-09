import { useState, useEffect } from "react";
import BottomIcon from "./common/BottomIcon";

interface PreloaderProps {
  className: string;
  onComplete: () => void;
  showBottomIcon?: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  className,
  showBottomIcon = true,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`bg-white ${className}`}>
      <div className="relative w-[300px]">
        {/* Progress Bar */}
        <div className="h-[8px] w-[320px] overflow-hidden rounded-xl bg-neutral-50">
          <div
            className="rounded-xl bg-brand-base h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Bottom Icon */}
      {showBottomIcon && (
        <div className="">
          <BottomIcon width={"406"} height={"270"} />
        </div>
      )}
    </div>
  );
};

export default Preloader;
