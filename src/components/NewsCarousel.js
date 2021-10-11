import React from "react";
import Carousel from "react-bootstrap/Carousel";

const NewsCarousel = (props) => {
  const newsImage = (img, src) => {
    if (!!img) {
      return <img className="d-block w-100" src={img} alt={src} />;
    } else {
      return;
    }
  };
  const newsItems = () => {
    if (props.news.length) {
      // only map the latest 5 items of news
      return props.news.slice(0, 5).map((newsItem) => (
        <Carousel.Item>
          <a target="_blank" rel="noopener noreferrer" href={newsItem.url}>
            {newsImage(newsItem.image, newsItem.source)}
            <Carousel.Caption>
              <h3>{newsItem.headline}</h3>
              <p>{newsItem.summary}</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      ));
    }
  };

  return <Carousel interval={12000}>{newsItems()}</Carousel>;
};

export default NewsCarousel;
