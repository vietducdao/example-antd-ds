type IconProps = {
  icon: React.ReactNode;
};

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <div className="text-4xl">{icon}</div>;
};

export default Icon;
