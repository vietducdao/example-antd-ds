// src/components/organisms/AboutSection.tsx
import React from "react";
import Heading from "../../atoms/heading/Heading";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/ButtonAbout";

const AboutSection: React.FC = () => {
  return (
    <section className="container mx-auto flex relative py-16">
      <div className="relative w-[70%]">
        <img
          src="/images/human.png"
          alt="About us"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute bottom-20 right-[-218px] p-6 text-white"
          style={{
            width: "357px",
            height: "382px",
            backgroundColor: "#2947A9",
          }}
        >
          <Heading text="About us" level={3} className="text-[27px] mb-4" />
          <Text className="text-white mb-4 text-[15px]">
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way. We’ve matured into an industry leader and trusted resource for
            those seeking quality, innovation and reliability when building in
            the U.S.
          </Text>
          <Button
            label="More on Our History"
            onClick={() => {}}
            className="bg-white text-[#2947A9] border-none py-2 px-4 font-semibold text-[13px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
