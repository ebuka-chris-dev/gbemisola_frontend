const AudioList = (props) => {
  const audio = props.data;
  return (
    <>
      {audio?.map((e, i) => {
        return (
          <li key={i}>
            <strong style={{ textTransform: "capitalize" }}>{e.title}: </strong>
            {e.description} ({new Date(e.createdAt).toDateString()})
            <p style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {e.file.map((x, z) => (
                <a
                  href={x}
                  key={z}
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
                    whiteSpace: "nowrap", // Prevents text wrapping inside each link
                  }}
                >
                  Listen to audio {z + 1}
                </a>
              ))}
            </p>
          </li>
        );
      })}
    </>
  );
};
export default AudioList;
