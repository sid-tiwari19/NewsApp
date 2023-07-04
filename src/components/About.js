import React from "react";

const About = () => {
  return (
    <div className="container py-5 about">
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
      <div className="card bg-light mb-4">
        <div className="card-body">
          <h5 className="card-title">
            Discover News Tailored to Your Interests - Search Any Topic or
            Category
          </h5>
          <p className="card-text">
            The search feature in Riyal Neus allows you to quickly find and
            explore news articles that matter to you. By entering keywords or
            phrases in the search bar, you can access relevant and up-to-date
            information on specific topics of interest. Stay informed and
            discover news stories tailored to your preferences with ease through
            our intuitive search functionality.
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
