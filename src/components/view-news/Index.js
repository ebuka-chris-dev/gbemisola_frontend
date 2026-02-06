import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../store/constant";
import { LoadingOverlay } from "../shared/LoadingOverlay";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const { id } = useParams();

  const fetchNewsById = async () => {
    try {
      const res = await axios.get(`${API_URI}/news/single/${id}`);
      const data = res.data.data;
      setNews(data);
      setLoading(false);
    } catch (err) {
      console.error("Error during news creation:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsById();
  }, [id]);
  return (
    <>
    {loading &&  <LoadingOverlay />}
    
      <article className="post-8325 post type-post status-publish format-standard hentry category-general category-inclusive-education">
        <div className="content-wrapper-inner">
          <header>
            <div className="breadcrumb">
              <span typeof="v:Breadcrumb">
                <a rel="v:url" property="v:title" href>
                  News
                </a>
              </span>
              <span className="delimiter">/</span>
              <span className="current">{news?.title}</span>
            </div>
            {/* .breadcrumbs */}
            <div className="item-title">
              <h1 className="entry-title" style={{fontWeight:"800"}}>{news?.title}</h1>
            </div>
            <span className="item-date">
              {new Date(news?.createdAt).toDateString()}
            </span>
          </header>
          <div className="entry-image focus-point-image">
            <figure className="image image-8323">
              <img
                fetchPriority="high"
                loading="lazy"
                style={{ objectPosition: "62.06% 51.07%" }}
                width={817}
                height={652}
                src={news?.image}
                srcSet={`
                    ${news?.image}       2048w,
                    ${news?.image} 1440w,
                    ${news?.image}  960w
                  `}
                alt={news?.title}
              />
            </figure>
          </div>
          <div className="entry-wrap">
            <div className="entry-content pull-up">
              <ul className="item-categories tag-nav">
              {news?.tags?.map((tag, key) => (
                      <li key={key}>
                        <span className="tag-badge">{tag.label}</span>
                      </li>
                    ))}
              </ul>
              <section id="readSpeakerSection">
                <section className="paragraph">
                  <div className="paragraph__container">
                    <div
                      dangerouslySetInnerHTML={{ __html: news?.description }}
                    />
                  </div>
                </section>
              </section>
              <footer className="entry-footer">
                <div className="entry-share">
                  <span className="entry-share-title">Share this</span>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=domainname/news/${id}/`}
                    target="_blank"
                    className="circle-button"
                    title="share article on facebook"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    style={{ paddingTop: "2px" }}
                    href={`https://twitter.com/intent/tweet?url=&via=Gbemisola_Yussuff_Foundation%20domainname/news/${id}/`}
                    target="_blank"
                    className="circle-button"
                    title="share article on twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        style={{ fill: "#ffffff" }}
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                      />
                    </svg>
                  </a>
                </div>
              </footer>
            </div>
            <aside className="entry-meta" />
          </div>
        </div>
      </article>
    </>
  );
};

export default Index;
