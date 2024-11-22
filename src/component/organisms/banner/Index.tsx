// src/components/organisms/Banner.tsx
import React from "react";
import FeatureTable from "../../molecules/featureProject/FeatureTable";

const Banner: React.FC = () => {
  return (
    <div
      className="relative width-[100%] h-[700px] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/building.png')" }}
    >
      <div className="container max-w-screen-lg mx-auto h-full flex flex-col justify-between">
        <div className="flex items-center h-full pl-4 md:pl-0">
          <h1 className="text-6xl font-bold leading-tight text-black">
            Building things
            <br />
            is our mission.
          </h1>
        </div>

        <div className="absolute bottom-0 right-0">
          <FeatureTable />
        </div>
      </div>
    </div>
  );
};

export default Banner;
