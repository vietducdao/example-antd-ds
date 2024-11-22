import StatItem from "../../molecules/statItem/Index";

const stats = [
  {
    icons: {
      topLeft: "/images/page.svg",
    },
    number: "123",
    label: "Projects Completed",
    position: "top-[190px] left-[100px]",
  },
  {
    icons: {
      topRight: "/images/hand.svg",
    },
    number: "84",
    label: "Happy Clients",
    position: "top-[100px] left-[300px]",
  },
  {
    icons: {
      topRight: "/images/cup.svg",
    },
    number: "37",
    label: "Awards Win",
    position: "top-[300px] left-[220px]",
  },
  {
    icons: {
      bottomRight: "/images/design.svg",
    },
    number: "30",
    label: "Years in Business",
    position: "top-[420px] left-[60px]",
  },
];

const StatsSection: React.FC = () => {
  return (
    <div className="container mx-auto relative py-12 flex flex-col lg:flex-row justify-between items-start">
      {/* Stats Items */}
      <div className="relative flex-1 mb-12 lg:mb-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`absolute ${stat.position} bg-white shadow-md w-[260px] h-[120px]`}
          >
            <StatItem
              icons={stat.icons}
              number={stat.number}
              label={stat.label}
            />
          </div>
        ))}
      </div>

      {/* text */}
      <div className="flex-1 pl-0 lg:pl-12 mt-8 lg:mt-32 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2947A9] leading-tight">
          30 Years <br /> Experience
        </h1>
        <p className="text-base md:text-lg text-[#525B7A] mt-4 leading-relaxed">
          Our company has been the <br /> leading provided construction <br />
          services to clients throughout <br />
          the USA since 1988.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#2947A9] text-white shadow hover:bg-blue-800 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default StatsSection;
