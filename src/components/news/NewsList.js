import { Link } from "react-router-dom";

const NewsList = (props) => {
  const news = props.data;
  return (
    <>
      {news?.map((e, i) => {
        return (
          <div className="archive-news-item item" key={i}>
            <div className="item-content">
              <div className="item-image focus-point-image">
                <Link to={`/news/${e._id}`}>
                  <figure className="image image-8521">
                    <img
                      loading="lazy"
                      style={{ objectPosition: "50% 50%" }}
                      width={1142}
                      height={1142}
                      src={e.image}
                      srcSet={`
                         ${e.image}         2048w,
                           ${e.image}  1440w,
                           ${e.image}   960w
                        `}
                      alt={e.title}
                    />
                  </figure>
                </Link>
              </div>
              <ul className="item-categories tag-nav">
              {e?.tags?.map((tag, key) => (
                      <li key={key}>
                        <span className="tag-badge">{tag.label}</span>
                      </li>
                    ))}
              </ul>
              <span className="item-date">
                {new Date(e.createdAt).toDateString()}
              </span>
              <Link to={`/news/${e._id}`}>
                <div className="item-title">
                  <h3>{e.title}</h3>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsList;
