import Index from "../../components/organisation/Index";
import { Borlabs } from "../../components/shared/Borlabs";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
// import Newsletter from "../../components/shared/Newsletter";
import SocialMedia from "../../components/shared/SocialMedia";

const Organisation = () => {
  return (
    <>
      <Header />
      <div className="content-wrapper">
      <Borlabs/>
        <Index />
        {/* <Newsletter /> */}
        <SocialMedia />
      </div>
      <Footer />
    </>
  );
};

export default Organisation;
