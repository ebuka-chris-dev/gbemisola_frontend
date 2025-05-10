import Index from "../../components/about-us/Index";
import { Borlabs } from "../../components/shared/Borlabs";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import Newsletter from "../../components/shared/Newsletter";
import SocialMedia from "../../components/shared/SocialMedia";

const About = () => {
  return (
    <>
      <Header />
      <div className="content-wrapper">
      <Borlabs/>
        <Index />
        <Newsletter />
        <SocialMedia />
      </div>
      <Footer />
    </>
  );
};

export default About;
