import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {

    /** state */
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    /*** version_1 (fetch - then 사용) 
    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
        .then(response => response.json())
        .then(json => {
            setMovies(json.data.movies);
            setLoading(false);
        });
    }, []);
     /*** --------------------------------------- */

    /*** version_2 (요새 많이 쓴다 [async & await]) 
    const getMovies = async () => {
        const response = await fetch (
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    /*** --------------------------------------- */

    /*** version_2.1 (간소화) */
    const getMovies = async () => {
        const json = await (
            await fetch (
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    /*** --------------------------------------- */


    /** data check */
    // console.log("-------------------------");
    console.log(movies);
    // console.log("-------------------------");
    // console.log("movies : " , movies);
    // console.log("-------------------------");
    // console.log("movies : " + movies);
    // console.log("-------------------------");

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie 
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image} 
                            title={movie.title}
                            rating={movie.rating}
                            year={movie.year}
                            runtime={movie.runtime}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;