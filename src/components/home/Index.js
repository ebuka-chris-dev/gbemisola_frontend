import { Borlabs } from "../shared/Borlabs";
// import Newsletter from "../shared/Newsletter";
import SocialMedia from "../shared/SocialMedia";

import RecentNews from "../shared/RecentNews";
import Hero from "./Hero";
import Mission from "./Mission";
import Approach from "./Approach";
import Counter from "./Counter";
import { useEffect,useState } from "react";
import axios from "axios";
import { API_URI } from "../../store/constant";
import { LoadingOverlay } from "../shared/LoadingOverlay";

const Index = () => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])

  const fetchNews = async () => {
    try {
      const res = await axios.get(`${API_URI}/news/all?limit=10`)
      const data = res.data.data;
      setNews(data)
      setLoading(false)
    } catch (err) {
      console.error('Error during news creation:', err)
      setLoading(false)
    }
  }
 

  useEffect(() => {
    fetchNews();
  }, [])
    return(
        <>
       {loading &&  <LoadingOverlay />}
         <div className="content-wrapper">
        <Borlabs/>
        <Hero data={news} />
        <Mission />
        <RecentNews data={news.slice(0,6)} />
        <Approach />
        <Counter />
        {/* <Newsletter /> */}
        <SocialMedia />
      </div>
        </>
    )
}

export default Index;