import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {

    /** parameters */
    const {id} = useParams();

    /** state */
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    /** async - await */
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    console.log(movie);
    
    
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1>movie img</h1>
                    {/* {movie.map((m) => (
                        <div>
                            <h1>movie img</h1>
                        </div>
                    ))} */}
                </div>
            )}
        </div>
    );
}

export default Detail;