import Index from "../../components/our-work/sokoto-learns/Index";
import { Borlabs } from "../../components/shared/Borlabs";
import Footer from "../../components/shared/Footer";
import Headers from "../../components/shared/Header";
import Newsletter from "../../components/shared/Newsletter";
import SocialMedia from "../../components/shared/SocialMedia";

const SokotoLearns = () => {

    return (
        <>
            <Headers />
            <div className="content-wrapper">
                <Borlabs />
                <Index />
                {/* relarted-content */}
                <Newsletter />
                <SocialMedia />
            </div>
            <Footer />
        </>
    )
}
export default SokotoLearns;