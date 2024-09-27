import React from "react";

type Props = {
  placeholder: string;
  value?: string;
  width?: string;
  height?: string;
  onChange?: (value: string) => void;
};

const TextField: React.FC<Props> = ({
  width = "100%",
  height = "20px",
  onChange,
  ...props
}) => {
  return (
    <input
      {...props}
      className="text-field"
      style={{ width, height }}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};

export default TextField;
