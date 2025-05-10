import AudioList from "./AudioList";
import MediaList from "./MediaList";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../store/constant";
import { Link } from "react-router-dom";
import YouTube from "../shared/Youtube";
import { LoadingOverlay } from "../shared/LoadingOverlay";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState([]);
  const [audio, setAudio] = useState([]);
  const [images, setImages] = useState([]);
  const [vidoe, setVideo] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10; // Items per page

  const fetchMedia = async (pageNumber) => {
    try {
      const res = await axios.get(
        `${API_URI}/media/all?page=${pageNumber}&limit=${limit}`
      );
      const data = res.data.data.reverse();

      // Filter media based on type
      const audioList = data.filter((e) => e.mediaType === "audio");
      const imageList = data.filter((e) => e.mediaType === "image");
      const videoList = data.filter((e) => e.mediaType === "video"); // Corrected typo
      setMedia(data);
      setImages(imageList);
      setVideo(videoList); // Corrected typo
      setAudio(audioList);
      setTotalPages(res.data.totalPages || 1);
      setLoading(false);
    } catch (err) {
      console.error("Error during media creation:", err);
      setLoading(false);
    }
  };

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

  useEffect(() => {
    fetchMedia(page);
  }, [page]);
  return (
    <>
      {loading && <LoadingOverlay />}

      <article className="post-6320 page type-page status-publish hentry">
        <div className="content-wrapper-inner">
          <div className="entry-wrap">
            <div className="entry-content">
              <header>
                <div className="breadcrumb">
                  <span typeof="v:Breadcrumb">
                    <a rel="v:url" property="v:title" href>
                      media
                    </a>
                  </span>
                  <span className="delimiter">/</span>
                  <span className="current">Media</span>
                </div>
                {/* .breadcrumbs */}
                <div className="item-title">
                  <h1 className="entry-title">Media</h1>
                </div>
                <span className="item-date" />
              </header>
              <div className="subnav-mobile">
                <Link to="/news/media" className="toggle-subnav-mobile">
                  media
                </Link>
                <ul className="entry-subnav">
                  <li className="page_item page-item-6320 current_page_item">
                    <Link to="/news/media" aria-current="page">
                      Media
                    </Link>
                  </li>
                </ul>
              </div>
              <section id="readSpeakerSection">
                <h2 className="wp-block-heading">
                  Gbemisola Yussuff Foundation in the media
                </h2>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      We are proud to share coverage of our programmes, projects
                      and expert colleagues in media outlets and partner
                      platforms worldwide.
                    </p>
                  </div>
                </section>
                {media?.length > 0 && (
                  <>
                    <MediaList data={images} />
                    <h3 className="wp-block-heading">More media coverage</h3>
                    <ul className="wp-block-list">
                      <AudioList data={audio} />
                      <YouTube data={vidoe} />
                    </ul>
                  </>
                )}
                <div className="content-wrapper-a">
                  {media.length > 0 && (
                    <nav className="navigation pagination" aria-label="Posts">
                      <h2 className="screen-reader-text">Posts navigation</h2>
                      <div className="nav-links">
                        {renderPaginationButtons()}
                      </div>
                    </nav>
                  )}
                </div>
              </section>
            </div>
            {/* <aside className="entry-meta">
              <div className="entry-subnav-wrap">
                <h5 className="entry-subnav-title">
                  <a href="https://www.light-for-the-world.org/media/">
                    media
                  </a>
                </h5>
                <ul className="entry-subnav">
                  <li className="page_item page-item-6320 current_page_item">
                    <a href="https://www.light-for-the-world.org/media/media/" aria-current="page">Media</a>
                  </li>
                </ul>
              </div>
            </aside> */}
          </div>
        </div>
      </article>
    </>
  );
};
export default Index;
