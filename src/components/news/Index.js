import NewsList from "./NewsList";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../store/constant";
import { Link } from "react-router-dom";
import { LoadingOverlay } from "../shared/LoadingOverlay";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10; // Items per page

  const fetchNews = async (pageNumber) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_URI}/news/all?page=${pageNumber}&limit=${limit}`
      );
      const data = res.data.data;

      setNews(data);
      setTotalPages(res.data.totalPages || 1);
      setLoading(false);
    } catch (err) {
      console.error("Error during news fetching:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <span
          style={{ cursor: "pointer" }}
          key={i}
          className={`page-numbers ${page === i ? "current" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </span>
      );
    }

    if (totalPages > 3) {
      // Add ellipsis if there are more than 3 pages
      return (
        <>
          {buttons.slice(0, 3)}
          {/* First 3 pages */}
          <span className="dots">...</span>
          {buttons.slice(totalPages - 1)}
          {/* Last page */}
        </>
      );
    }
    return buttons;
  };

  return (
    <>
      {loading && <LoadingOverlay />}

      <div className="item-featured">
        <div className="item-featured-bg focus-point-image focus-point-image-bg">
          <Link to={news[0]?._id}>
            <figure className="image image-284 bg-image">
              <img
                loading="lazy"
                style={{ objectPosition: "51.76% 65.15%" }}
                width={1024}
                height={683}
                src={news[2]?.image}
                alt={news[2]?.title}
              />
            </figure>
          </Link>
        </div>
        <div className="item-featured-inner content-wrapper-inner">
          <div className="item-featured-content">
            <div className="item-featured-text">
              <ul className="item-categories tag-nav tag-nav-white">
                {news[2]?.tags?.map((e, i) => (
                  <li key={i}>
                    <span className="tag-badge">{e.label}</span>
                  </li>
                ))}
              </ul>
              <Link to={`/news/${news[2]?._id}`}>
                <div className="item-title">
                  <h2 style={{ textTransform: "capitalize",fontWeight:"800" }}>
                    {news[2]?.title}
                  </h2>
                </div>
              </Link>
              <br/>
              <Link
                className="cta-button " id="news-btn"
                to={`/news/${news[2]?._id}`}
              >
                Read the story
              </Link>
            </div>
          </div>
        </div>
      </div>

      <article className="archive-wrap news-header" style={{ marginBottom: "1rem" }}>
        <h1 className="archive-title hl-underline hl-underline-centered" style={{fontWeight:"800"}}>
          News
        </h1>
        <div className="archive-grid content-wrapper-inner">
          <NewsList data={news} />
        </div>
        <div className="content-wrapper-a">
          {news.length > 0 && (
            <nav className="navigation pagination" aria-label="Posts">
              <h2 className="screen-reader-text">Posts navigation</h2>
              <div className="nav-links">
                {renderPaginationButtons()}

              </div>
            </nav>
          )}
        </div>
      </article>
    </>
  );
};

export default Index;
