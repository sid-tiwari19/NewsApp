import React, { useState, useEffect } from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
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
    <div className="my-3">
      <div className="card">
        <span className={cName} style={{ left: "50%", zIndex: "1" }}>
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
          }
          className="card-img-top"
          alt="lol"
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
              By {author} on - {new Date(date).toDateString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm "
            style={{ backgroundColor: buttonColor, color: "white" }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
