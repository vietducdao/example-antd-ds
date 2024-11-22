// src/components/organisms/ServicesGrid.tsx
import React from "react";
import ServiceCard from "../../molecules/supportService";
import {
  FiHome,
  FiTool,
  FiLayout,
  FiSettings,
  FiZap,
  FiCompass,
} from "react-icons/fi";

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-[31px] font-bold text-center mb-8">Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <ServiceCard icon={<FiHome />} title="Construction" />
        <ServiceCard
          icon={<FiTool />}
          title="Renovation"
          background="bg-[#2947A9]"
          textColor="text-white"
          iconColor="text-white"
        />
        <ServiceCard icon={<FiLayout />} title="Consultation" />
        <ServiceCard
          icon={<FiSettings />}
          title="Repair Services"
          background="bg-[#2947A9]"
          textColor="text-white"
          iconColor="text-white"
        />
        <ServiceCard icon={<FiCompass />} title="Architecture" />
        <ServiceCard
          icon={<FiZap />}
          title="Electric"
          background="bg-[#2947A9]"
          textColor="text-white"
          iconColor="text-white"
        />
      </div>
    </section>
  );
};

export default ServicesGrid;
