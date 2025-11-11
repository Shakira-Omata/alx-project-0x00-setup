import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button 
      className={`font-medium transition-all duration-200 hover:opacity-80 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;