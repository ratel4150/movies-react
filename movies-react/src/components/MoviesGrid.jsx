import React from "react";
import MoviesDB from "../db/movies.json"
import MovieCard from "./MovieCard";

const MoviesGrid=()=>{
    console.log(MoviesDB);
    return(
        <ul>
            {MoviesDB.map((movie)=>{

                return <MovieCard key={movie.id} movie={movie} />/* </MovieCard><li key={movie.id}>{movie.title}</li> */

            }
            
                 
            )}
        </ul>

    )

}

export default MoviesGrid