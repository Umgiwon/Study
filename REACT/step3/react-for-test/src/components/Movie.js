import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, rating, year, runtime, summary, genres}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
            <ul className={styles.movie__genres}>
                {genres.map((g, index) => (
                    <li key={index}>
                        {g}
                    </li>
                ))}
            </ul>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;