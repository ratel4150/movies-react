import React from "react";
import styles from "../modules_css/MovieCard.module.css"


const MovieCard =({movie})=>{
    const imageUrl="https://image.tmdb.org/t/p/w300"+movie.poster_path
    return (
        <li className={styles.movieCard}>
            <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt={movie.title}  />
            {movie.title}</li>
    )
}

export default MovieCard