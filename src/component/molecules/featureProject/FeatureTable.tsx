import React from "react";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/ButtonBanner";

const FeatureCard: React.FC = () => {
  return (
    <div
      className="text-white shadow-lg w-[304px] flex flex-col"
      style={{ backgroundColor: "#3559C7" }}
    >
      <div className="p-4 flex flex-col items-center">
        <Text isBold={true} additionalClasses="text-center mb-1 text-[15px]">
          Feature Projects
        </Text>
        <Text additionalClasses="text-center text-[20px]">
          The National University of Architecture
        </Text>
      </div>

      <div className="flex items-center divide-x divide-gray-400 bg-gray-900">
        <Button
          label="Back"
          onClick={() => {}}
          direction="left"
          additionalClasses="w-[152px] h-[29px] py-1 text-white text-center flex items-center justify-center"
        />
        <Button
          label="Next"
          onClick={() => {}}
          direction="right"
          additionalClasses="w-[152px] h-[29px] py-1 text-white text-center flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
