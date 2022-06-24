import React from "react";


const MovieCard =({movie})=>{
    const imageUrl="https://image.tmdb.org/t/p/w300"+movie.poster_path
    return (
        <li>
            <img src={imageUrl} alt={movie.title} srcset="" />
            {movie.title}</li>
    )
}

export default MovieCard