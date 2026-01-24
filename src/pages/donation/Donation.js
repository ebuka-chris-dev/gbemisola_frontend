import Index from "../../components/donation/Index";

import { Borlabs } from "../../components/shared/Borlabs";
import Footer from "../../components/shared/Footer";
import Headers from "../../components/shared/Header";
import Newsletter from "../../components/shared/Newsletter";
import SocialMedia from "../../components/shared/SocialMedia";
import "../../assets/styles/donation.style.css"
const Donation = () => {

    return (
        <>
            <Headers />
            <div className="conteant-wrapper">
                <Borlabs />
                <Index />
                {/* relarted-content */}
                {/* <Newsletter />
                <SocialMedia /> */}
            </div>
            {/* <Footer /> */}
        </>
    )
}
export default Donation;