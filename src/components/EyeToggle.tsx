import { FiEye, FiEyeOff } from "react-icons/fi";

interface EyeToggleProps {
  showVisibility: boolean;
  togglePasswordVisibility: () => void;
  className?: string;
}

const EyeToggle: React.FC<EyeToggleProps> = ({
  showVisibility,
  togglePasswordVisibility,
  className
}) => {
  return (
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className={` text-white ${className}`}
    >
      {showVisibility ? (
        <FiEyeOff className="w-5 h-5" />
      ) : (
        <FiEye className="w-5 h-5" />
      )}
    </button>
  );
};

export default EyeToggle;
