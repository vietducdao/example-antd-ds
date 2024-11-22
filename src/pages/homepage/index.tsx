import AboutSection from "../../component/organisms/AboutSection/Index";
import Banner from "../../component/organisms/banner/Index";
import Header from "../../component/organisms/header/Index";
import ReputationSection from "../../component/organisms/reputationSection";
import StatsList from "../../component/organisms/statList/Index";
import SupportGrid from "../../component/organisms/supportGrid";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <ReputationSection />
      <AboutSection />
      <SupportGrid />
      <StatsList />
    </>
  );
};

export default HomePage;
