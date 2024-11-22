import React from "react";
import Heading from "../../atoms/heading/Heading";
import ServiceCard from "../../molecules/serviceCard/Index";
import { FiUsers, FiLayers } from "react-icons/fi";

const ReputationSection: React.FC = () => {
  return (
    <section className="text-center py-12">
      <Heading text="Our Reputation" level={2} className="text-3xl mb-8" />
      <div className="flex gap-8 justify-center">
        <ServiceCard
          title="Best Services"
          description="Nullam senectus porttitor in eget. Eget rutrum leo interdum."
          icon={<FiUsers />}
        />
        <ServiceCard
          title="Best Teams"
          description="Cursus semper tellus volutpat aliquet lacus."
          icon={<FiUsers />}
        />
        <ServiceCard
          title="Best Designs"
          description="Ultricies at ipsum nunc, tristique nam lectus."
          icon={<FiLayers />}
        />
      </div>
    </section>
  );
};

export default ReputationSection;
