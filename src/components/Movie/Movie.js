import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import useHover from "../../hooks/useHover";
import { useConfirm } from "../../hooks/useConfirm";
import { useFullscreen } from "../../hooks/useFullscreen";
import useClick from "../../hooks/useClick";

const Movie = ({ id, mediumCoverImage, title, summary, genres }) => {
  const linkToMovieDetail = () => (window.location.href = `/movie/${id}`);
  const confirmLink = useConfirm("Are you sure this link?", linkToMovieDetail);
  const onClick = (e) => {
    e.preventDefault();
    confirmLink();
  };

  const titleHover = useHover(
    (e) => {
      e.target.style.color = "red";
    },
    (e) => {
      e.target.style.color = "black";
    }
  );

  const { fullscreenRef, triggerFull, exitFull } = useFullscreen();
  const clickRef = useClick(triggerFull);

  return (
    <div>
      <div>
        <div ref={clickRef}>
          <img ref={fullscreenRef} src={mediumCoverImage} alt={title} />
        </div>
      </div>
      <h1>
        <Link to={`/movie/${id}`} className={styles.title} ref={titleHover} onClick={onClick}>
          {title}
        </Link>
      </h1>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
