type StatLabelProps = {
  label: string;
};

const StatLabel: React.FC<StatLabelProps> = ({ label }) => {
  return <p className="text-lg text-gray-500">{label}</p>;
};

export default StatLabel;
