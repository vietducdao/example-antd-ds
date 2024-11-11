import React from "react";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";

const FeatureCard: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white  shadow-lg w-80 flex flex-col">
      <div className="p-6 flex flex-col items-center">
        <Text isBold={true} additionalClasses="text-center text-lg mb-2">
          Feature Projects
        </Text>
        <Text additionalClasses="text-center text-md ">
          The National University of Architecture
        </Text>
      </div>

      <div className="flex items-center divide-x divide-gray-400 bg-gray-900 ">
        <Button
          label="Back"
          onClick={() => {}}
          direction="left"
          additionalClasses="flex-1 py-2 text-white text-center"
        />
        <Button
          label="Next"
          onClick={() => {}}
          direction="right"
          additionalClasses="flex-1 py-2 text-white text-center"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
