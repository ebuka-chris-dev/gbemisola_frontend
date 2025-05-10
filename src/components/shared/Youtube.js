const YouTube = (props) => {
  const vidoe = props.data;
  return (
    <>
      {vidoe?.map((row, i) => {
        return (
          <figure key={i} className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
            <div className="wp-block-embed__wrapper">
              <iframe
                title={row.title}
                width="500"
                height="281"
                src={
                  row.file[0] && row.file[0].includes("youtu.be")
                    ? `https://www.youtube.com/embed/${
                        row.file[0].split("youtu.be/")[1]?.split("?")[0]
                      }`
                    : "Invalid YouTube URL"
                } // Construct the embed URL dynamically
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </figure>
        );
      })}
    </>
  );
};

export default YouTube;
