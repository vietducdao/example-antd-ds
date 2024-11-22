type StatNumberProps = {
  number: string | number;
};

const StatNumber: React.FC<StatNumberProps> = ({ number }) => {
  return <h2 className="text-5xl font-bold text-gray-800">{number}</h2>;
};

export default StatNumber;
