import React from "react";
import Heading from "../../atoms/heading/Heading";
import Text from "../../atoms/text/Text";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="w-56 h-auto flex flex-col items-center p-6 border border-gray-200 bg-white text-center shadow-sm">
      <div className="text-orange-500 text-4xl mb-4">{icon}</div>
      <Heading text={title} level={3} />
      <Text additionalClasses="text-gray-500 text-sm">{description}</Text>
    </div>
  );
};

export default ServiceCard;
