import Index from "../../components/media/Index";
import { Borlabs } from "../../components/shared/Borlabs";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
// import Newsletter from "../../components/shared/Newsletter";
import RecentNews from "../../components/shared/RecentNews";
import SocialMedia from "../../components/shared/SocialMedia";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../store/constant";


const Media = () => {
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState([])

  const fetchNews = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${API_URI}/news/all`)
      const data = res.data.data.reverse();
      setNews(data)
      setLoading(false)
    } catch (err) {
      console.error('Error during news creation:', err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Borlabs />
        <Index />
        <RecentNews data={news.slice(0, 6)} />
        {/* <Newsletter /> */}
        <SocialMedia />
      </div>
      <Footer />
    </>
  );
};

export default Media;
