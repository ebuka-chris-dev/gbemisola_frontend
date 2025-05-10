import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import Index from "../../components/donation-info/Index";
import Newsletter from "../../components/shared/Newsletter";
import SocialMedia from "../../components/shared/SocialMedia";
import { Borlabs } from "../../components/shared/Borlabs";

const DonationInfo = () => {
  return (
    <><Header />
    <div className="content-wrapper">
    <Borlabs/>
      <Index />
      {/* recent news  */}
      <Newsletter />
      <SocialMedia />
    </div>
    <Footer />

    </>
  );
};
export default DonationInfo;
