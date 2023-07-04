import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(9);

  // api information
  // const subscriptionKey = {hidden};

  const updateNews = async () => {
    await fetchUpdatedData();
  };

  useEffect(() => {
    props.setProgress(20);
    setLoading(true);
    document.name = `${props.final ? props.final : props.yo}- Riyal Neus`;
    updateNews();
    // eslint-disable-next-line
  }, [page, props.final]);

  const fetchUpdatedData = async () => {
    const url = `https://api.bing.microsoft.com/v7.0/news/search?q=${
      props.final ? props.final : props.category
    }+news&cc=${props.country}&count=${page}&offset=0`;

    fetch(url, {
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.value);
        props.setProgress(60);
        setLoading(false);
        props.setProgress(100);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 9);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center headline">
        Top {props.final ? props.final : props.yo} headlines{" "}
      </h1>
      {page === 9 && loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        hasMore={true}
        next={fetchMoreData}
        loader={page !== 9 && loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={
                      element.name == null
                        ? ""
                        : element.name.length < 70
                        ? element.name
                        : element.name.slice(0, 70) + "..."
                    }
                    description={
                      element.description == null
                        ? ""
                        : element.description.length < 95
                        ? element.description
                        : element.description.slice(0, 95) + "..."
                    }
                    imageUrl={
                      element.image
                        ? element.image.thumbnail.contentUrl + "?w=640&h=400"
                        : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={
                      element.datePublished
                        ? element.datePublished.slice(0, 10)
                        : ""
                    }
                    source={element.provider[0].name}
                    docColor={props.docColor}
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
  lang: "en",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  lang1: PropTypes.string,
};

export default News;
