import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="display-4 my-3 mb-4" style={{ fontFamily: "Georgia" }}>
        Riyal Neus
      </h1>
      <div className="card bg-light mb-4">
        <div className="card-body">
          <h5 className="card-title">Stay Updated with Top Headlines</h5>
          <p className="card-text">
            Get the latest news at your fingertips. Riyal News brings you the
            top headlines from around the world, keeping you informed and up to
            date.
          </p>
        </div>
      </div>
      <div className="card bg-light mb-4">
        <div className="card-body">
          <h5 className="card-title">Quick Summaries for Quick Updates</h5>
          <p className="card-text">
            Time is valuable. Riyal News provides quick summaries of news
            articles, allowing you to stay informed even when you're on the go.
          </p>
        </div>
      </div>
      <div className="card bg-light mb-4">
        <div className="card-body">
          <h5 className="card-title">Explore Different Categories</h5>
          <p className="card-text">
            From business and sports to entertainment and technology, Riyal News
            offers a wide range of categories to cater to your interests and
            preferences.
          </p>
        </div>
      </div>
      <div className="card bg-light mb-4">
        <div className="card-body">
          <h5 className="card-title">Dark Mode for Comfortable Reading</h5>
          <p className="card-text">
            Give your eyes a break. Riyal News features a dark mode that
            provides a visually comfortable reading experience, especially in
            low-light conditions.
          </p>
        </div>
      </div>
      <p className="lead">
        <b>Want to read the full article?</b> Simply click on <b>"Read More"</b>
        to dive deeper into the news stories and get all the details.
      </p>
    </div>
  );
};

export default About;
