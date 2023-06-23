import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {

    /** parameters */
    const {id} = useParams();

    /** state */
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    /** async - await */
    const getMovie = useCallback(async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(prev => !prev);
    },[id]);
    console.log(movie);
    
    
    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={movie.large_cover_image} alt={movie.title}/>
                    <h2>
                        {movie.title}
                    </h2>
                    <p>rating:{movie.rating} year:{movie.year} runtime:{movie.runtime}</p>
                    <p>{movie.summary}</p>
                    <ul>
                        {movie.genres.map((g, index) => (
                            <li key={index}>
                                {g}
                            </li>
                        ))}
                    </ul>
                    <p>{movie.description_intro}</p>
                </div>
            )}
        </div>
    );
}

export default Detail;