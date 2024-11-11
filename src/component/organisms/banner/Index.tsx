import React from "react";
import FeatureTable from "../../molecules/featureProject/FeatureTable";

const Banner: React.FC = () => {
  return (
    <div
      className="relative  h-[473px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/building.png')" }}
    >
      <div className="absolute top-1/4 left-32 text-black">
        <h1 className="text-6xl font-bold leading-tight">
          Building things
          <br />
          is our mission.
        </h1>
      </div>

      <div className="absolute bottom-0 right-0">
        <FeatureTable />
      </div>
    </div>
  );
};

export default Banner;
