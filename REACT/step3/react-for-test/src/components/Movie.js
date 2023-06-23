import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, rating, year, runtime, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>rating:{rating} year:{year} runtime:{runtime}</p>
            <p>{summary}</p>
            <ul>
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