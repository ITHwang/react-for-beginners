import PropTypes from "prop-types";
import useTabs from "../hooks/useTabs";
import { useState } from "react";
import useClick from "../hooks/useClick";

const getMovieDetail = (movie) => {
  return [
    {
      tab: "story",
      content: movie.description_full,
    },
    {
      tab: "rating",
      content: movie.rating,
    },
    {
      tab: "url",
      content: movie.url,
    },
  ];
};

const MovieDetail = ({ movie }) => {
  const [movieDetail, setMovieDetail] = useState(getMovieDetail(movie));
  const { currentTab, changeTab } = useTabs(0, movieDetail);

  const toggle = useClick((e) => {
    const content = e.target.parentNode.querySelector("div.movie-detail");
    content.hidden = !content.hidden;
  });

  return (
    <div>
      <button ref={toggle}>toggle</button>
      <div className="movie-detail">
        <div>
          {movieDetail.map((section, index) => (
            <button key={index} onClick={() => changeTab(index)}>
              {section.tab}
            </button>
          ))}
        </div>
        <div>{currentTab.content}</div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetail;
