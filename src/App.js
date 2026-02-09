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
import "./assets/styles/typography.css";


import Home from './pages/home/Home';
import About from './pages/about-us/About';
import Organisation from './pages/organisation/Organisation';

import News from './pages/news/News';
import Media from './pages/media/Media';
import WorkWithUs from './pages/work-with-us/WorkWithUs';
import DonationInfo from './pages/donation-info/DonationInfo';
import Partnership from './pages/partnership/Partnership';
import Message from './pages/message/Message';
import ViewNews from './pages/view-news/ViewNews';
import ContactUs from './pages/contact-us/ContactUs';
// import Donation from './pages/donation/Donation';
import SokotoLearns from './pages/sokoto-learns/SokotoLearns';
import SmartLearningHub from './pages/smart-learning-hub/SmartLearningHub';
import ReadToLead from './pages/read-to-lead/ReadToLead';
import CapacityBuildingForTeachers from './pages/capacity-building-for-teachers/CapacityBuildingForTeachers';



function App() {

 
  return (
   <>
   <BrowserRouter> 
   <Routes> 
   <Route path="/" element={<Home />} />
   <Route path="/about-us" element={<About />} />
   <Route path="/our-founder-organisation" element={<Organisation />} />

   <Route path="/founder-message" element={<Message />} />
   <Route path="/capacity-building-for-teachers" element={<CapacityBuildingForTeachers />} />
   <Route path="/Literacy-and-Numeracy-Recovery-Program-in-Sokoto-State" element={<SokotoLearns />} />
   <Route path="/smart-learning-hub" element={<SmartLearningHub />} />
   <Route path="/read-to-lead-campaign" element={<ReadToLead />} />

   <Route path="/contact-us" element={<ContactUs />} />
   <Route path="/news" element={<News />} />
   <Route path="/news/:id" element={<ViewNews />} />
   <Route path="/news/media" element={<Media />} />
   <Route path="/work-with-us" element={<WorkWithUs />} />
   <Route path="/donation-information" element={<DonationInfo />} />
   {/* <Route path="/donations" element={<Donation />} /> */}

   <Route path="/partnerships" element={<Partnership />} />

   </Routes>

   </BrowserRouter>
   <ToastContainer />

   </>
  );
}

export default App;
