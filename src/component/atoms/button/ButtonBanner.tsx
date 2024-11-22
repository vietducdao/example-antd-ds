type ButtonProps = {
  label: string;
  onClick: () => void;
  direction: "left" | "right";
  additionalClasses?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  direction,
  additionalClasses = "",
}) => {
  return (
    <button onClick={onClick} className={`${additionalClasses}`}>
      {direction === "left" && <span className="p-3"> ← </span>}
      <span>{label}</span>
      {direction === "right" && <span className="p-3"> → </span>}
    </button>
  );
};

export default Button;
