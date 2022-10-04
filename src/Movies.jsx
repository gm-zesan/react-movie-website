import React from "react";
import { useGlobalContext } from "./Context";

const Movies = () => {
    const { movie } = useGlobalContext();
    return (
        <>
            {movie.map((m) => (
                <h4 key={m.imdbID}>{m.Title}</h4>
            ))}
        </>
    );
};

export default Movies;
