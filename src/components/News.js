import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(40);
    await fetchUpdatedData();
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}- Riyal Neus`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchUpdatedData = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://api.newscatcherapi.com/v2/latest_headlines",
      params: {
        lang: props.lang1,
        page: page,
        page_size: props.pageSize,
        countries: props.country,
        topic: props.category,
      },
      headers: {
        "x-api-key": "kQ-eoJk0VZw8k9RmnWiF0ZJDr2tvD5SrbS-5Dlb4BvM",
        Accept: "application/json", // Set the Accept header to indicate JSON response
      },
    };
    try {
      const response = await axios.request(options);
      const responseData = response.data;
      setArticles(articles.concat(responseData.articles));
      setTotalResults(responseData.totalResults);
      setLoading(false);
    } catch (error) {}
  };
  const fetchMoreData = async () => {
    setPage(page + 1);
    fetchUpdatedData();
  };

  return (
    <div className="container my-3">
      <h1
        className="text-center "
        style={{ margin: "35px 0px", paddingTop: "30px" }}
      >
        Top {capitalizeFirstLetter(props.category)} headlines{" "}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.link}>
                  <NewsItem
                    title={
                      element.title == null
                        ? ""
                        : element.title.length < 70
                        ? element.title
                        : element.title.slice(0, 70) + "..."
                    }
                    description={
                      element.summary == null
                        ? ""
                        : element.summary.length < 95
                        ? element.summary
                        : element.summary.slice(0, 95) + "..."
                    }
                    imageUrl={element.media}
                    newsUrl={element.link}
                    author={element.author ? element.author : "Unknown"}
                    date={
                      element.published_date
                        ? element.published_date.slice(0, 10)
                        : ""
                    }
                    source={element.clean_url}
                    docColor={props.docColor}
                    lang1={props.lang1}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      <div className="container mx-3 d-flex justify-content-between"></div>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "news",
  lang: "en",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  lang1: PropTypes.string,
};

export default News;
