import Index from "../../components/contact-us/Index";
import { Borlabs } from "../../components/shared/Borlabs";
import Footer from "../../components/shared/Footer";
import Headers from "../../components/shared/Header";
// import Newsletter from "../../components/shared/Newsletter";
import SocialMedia from "../../components/shared/SocialMedia";

const ContactUs = () => {

    return (
        <>
            <Headers />
            <div className="content-wrapper">
                <Borlabs />
                <Index />
                {/* relarted-content */}
                {/* <Newsletter /> */}
                <SocialMedia />
            </div>
            <Footer />
        </>
    )
}
export default ContactUs;