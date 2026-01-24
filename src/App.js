import { Routes, Route,BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/App.css';
import './assets/styles/hero.css';
import './assets/styles/hero.css';
import './assets/styles/swiper-bundle.css';
import './assets/styles/en.css';
import './assets/styles/single-teaser.css';
import './assets/styles/counter-icons.css';
import './assets/styles/text-media.css';
import './assets/styles/contact-box.css';



import Home from './pages/home/Home';
import Test from './pages/Test';
import About from './pages/about-us/About';
import Organisation from './pages/organisation/Organisation';

import OurWork from './pages/our-work/OurWork';
import News from './pages/news/News';
import Media from './pages/media/Media';
import WorkWithUs from './pages/work-with-us/WorkWithUs';
import DonationInfo from './pages/donation-info/DonationInfo';
import Partnership from './pages/partnership/Partnership';
import Message from './pages/message/Message';
import ViewNews from './pages/view-news/ViewNews';
import ContactUs from './pages/contact-us/ContactUs';
import Donation from './pages/donation/Donation';



function App() {

 
  return (
   <>
   <BrowserRouter> 
   <Routes> 
   <Route path="/" element={<Home />} />
   <Route path="/about-us" element={<About />} />
   <Route path="/our-founder-organisation" element={<Organisation />} />

   <Route path="/founder-message" element={<Message />} />
   <Route path="/our-work" element={<OurWork />} />
   <Route path="/contact-us" element={<ContactUs />} />
   <Route path="/news" element={<News />} />
   <Route path="/news/:id" element={<ViewNews />} />
   <Route path="/news/media" element={<Media />} />
   <Route path="/work-with-us" element={<WorkWithUs />} />
   <Route path="/donation-information" element={<DonationInfo />} />
   <Route path="/donations" element={<Donation />} />

   <Route path="/partnerships" element={<Partnership />} />







   <Route path="/test" element={<Test />} />


   </Routes>

   </BrowserRouter>
   <ToastContainer />

   </>
  );
}

export default App;
