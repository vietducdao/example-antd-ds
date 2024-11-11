// src/organisms/ReputationSection.tsx
import { FiUsers, FiLayers, FiHeadphones } from "react-icons/fi";
import ServiceCard from "../../molecules/serviceCard/ServiceCard";

const ReputationSection = () => {
  return (
    <section className="text-center py-12 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-8">Our Reputation</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <ServiceCard
          title="Best Services"
          description="Nullam senectus porttitor in eget. Eget rutrum leo interdum."
          icon={<FiHeadphones />}
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
