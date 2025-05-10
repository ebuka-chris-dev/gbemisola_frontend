import { Link } from "react-router-dom";
import { useState } from "react";

const MediaList = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  const images = props.data;
  return (
    <>
      {images?.map((e, i) => {
        return (
          <section
            key={i}
            className="text-media image-left"
            style={{ alignItems: "center" }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .focus-point-image figure.image-8516 img {\n                        object-fit: cover;\n                      }\n                    ",
              }}
            />
            <div className="text-media-image focus-point-image">
              <div>
                <figure className="image image-8516">
                  <img
                    decoding="async"
                    loading="lazy"
                    style={{ objectPosition: "50% 50%" }}
                    width={1760}
                    height={909}
                    src={e.file[0]}
                    srcSet={`
                       ${e.file[0]}         2048w,
                        ${e.file[0]}  1440w,
                         ${e.file[0]}   960w
                      `}
                    alt={e.title}
                  />
                </figure>
              </div>
            </div>
            <div className="text-media-text">
              <p>
                <strong>
                  {e.title} ({new Date(e.createdAt).toDateString()})
                </strong>
              </p>
              <p>
                {isExpanded
                  ? e.description
                  : `${e.description.slice(0, 100)}...`}
                {e.description.length > 100 && (
                  <button
                    onClick={toggleDescription}
                    style={{
                      background: "none",
                      border: "none",
                      color: "blue",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                )}
              </p>
              <p style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {e.file.map((x, z) => (
                  <a
                    key={z}
                    href={x}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      margin: "2px",
                      color: "black",
                      textDecoration: "none",
                      padding: "5px 10px",
                      border: "1px solid #39B54A",
                      borderRadius: "5px",
                      display: "inline-block",
                      whiteSpace: "nowrap", // Ensures the text doesn't wrap inside each link
                    }}
                  >
                    View Image {z + 1}
                  </a>
                ))}
              </p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default MediaList;
