import React from "react";
import MoviesDB from "../db/movies.json"
import MovieCard from "./MovieCard";
import styles from "../modules_css/MoviesGrid.module.css"

const MoviesGrid=()=>{
    console.log(styles);
    return(
        <ul className={styles.moviesGrid}>
            {MoviesDB.map((movie)=>{

                return <MovieCard key={movie.id} movie={movie} />/* </MovieCard><li key={movie.id}>{movie.title}</li> */

            }
            
                 
            )}
        </ul>

    )

}

export default MoviesGrid