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
    <div className="w-[214px] h-auto flex flex-col items-start p-4 border bg-white text-left">
      <div className="text-orange-500 text-[29px] mb-4 self-start">{icon}</div>
      <Heading text={title} level={3} />
      <Text>
        <span style={{ color: "#858EAD", fontSize: "12px" }}>
          {description}
        </span>
      </Text>
    </div>
  );
};

export default ServiceCard;
