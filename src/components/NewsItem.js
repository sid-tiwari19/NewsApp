import React, { useState, useEffect } from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, source } = props;
  const [mode, setMode] = useState("white");
  const [badgeColor, setBadgeColor] = useState("success");
  const [buttonColor, setButtonColor] = useState("#007BFF");
  const cName = `position-absolute top-0 translate-middle badge rounded-pill bg-${badgeColor}`;

  useEffect(() => {
    if (props.docColor === "Dark") {
      setMode("black");
      setButtonColor("red");
      setBadgeColor("warning");
    } else {
      setMode("white");
      setButtonColor("#007BFF");
      setBadgeColor("success");
    }
  }, [props.docColor]);

  useEffect(() => {}, [props.lang1]);

  return (
    <div className="my-3" style={{ overflow: "hidden", paddingTop: "10px" }}>
      <div
        className="card rounded"
        style={{
          width: "min(100%,400px)",
          height: "500px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          className={cName}
          style={{
            marginLeft: "50%",
            zIndex: "1",
          }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="lol"
          style={{
            height: "250px",
            width: "400px",
            alignSelf: "center",
            padding: "2px",
            border: "20px",
          }}
        />
        <div
          className="card-body"
          style={{
            backgroundColor: mode,
            color: mode === "white" ? "black" : "white",
          }}
        >
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small
              style={{
                backgroundColor: mode,
                color: mode === "white" ? "black" : "white",
              }}
            >
              Published on - {new Date(date).toDateString()}
            </small>
          </p>
        </div>
        <div
          style={{
            backgroundColor: mode,
            color: mode === "white" ? "black" : "white",
          }}
        >
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm "
            style={{
              backgroundColor: buttonColor,
              color: "white",
              marginLeft: "20px",
              marginBottom: "20px",
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
