type StatItemProps = {
  icons: {
    topLeft?: string;
    topRight?: string;
    bottomRight?: string;
  };
  number: string | number;
  label: string;
};

const StatItem: React.FC<StatItemProps> = ({ icons, number, label }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg w-full h-full px-4 py-2">
      {/* Icon trên góc trái */}
      {icons.topLeft && (
        <img
          src={icons.topLeft}
          alt="Top Left Icon"
          className="absolute -top-8 -left-6 w-[58px] h-[58px]"
        />
      )}

      {/* Icon trên góc phải */}
      {icons.topRight && (
        <img
          src={icons.topRight}
          alt="Top Right Icon"
          className="absolute -top-6 -right-6 w-[71px] h-[71px]"
        />
      )}

      {/* Icon dưới góc phải */}
      {icons.bottomRight && (
        <img
          src={icons.bottomRight}
          alt="Bottom Right Icon"
          className="absolute -bottom-6 -right-6 w-[62px] h-[62px]"
        />
      )}

      {/* Số liệu */}
      <h2 className="text-5xl font-bold text-gray-800">{number}</h2>
      <p className="text-lg text-gray-500 mt-2">
        <span className="text-orange-500 text-2xl font-bold align-middle">
          |
        </span>{" "}
        {label}
      </p>
    </div>
  );
};

export default StatItem;
