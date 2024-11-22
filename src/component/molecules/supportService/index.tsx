import React from "react";
import Text from "../../atoms/text/TextSupport";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  background?: string;
  textColor?: string;
  iconColor?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  background = "bg-white",
  textColor = "text-blue-800",
  iconColor = "text-blue-700",
}) => {
  return (
    <div
      className={`w-[198px] h-[132px] ${background} p-4 shadow-lg flex flex-col items-center justify-center`}
    >
      {/* background behind icon */}
      <div className="w-3 h-3 bg-[#7595FD] flex items-center bottom-1">
        {" "}
        <div className={`text-[30px] ${iconColor}`}>{icon}</div>{" "}
        {/* icon & size */}
      </div>
      <hr className="w-6 border-t-2 border-gray-300 my-2" />
      <Text text={title} color={`${textColor} text-[15px]`} />
    </div>
  );
};

export default ServiceCard;
