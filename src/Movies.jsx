import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Movies = () => {
    const { movie, isLoading } = useGlobalContext();
    if (isLoading) {
        return <div className="loading">Loading....</div>;
    }

    return (
        <>
            <section className="movie-page">
                <div className="container grid grid-4-col">
                    {movie.map((m) => {
                        const { imdbID, Title, Poster } = m;
                        const movieTitle = Title.substring(0, 15);
                        return (
                            <NavLink key={imdbID} to={`/movie/${imdbID}`}>
                                <div className="card">
                                    <div className="card-info">
                                        <h2>
                                            {movieTitle.length >= 15
                                                ? `${movieTitle}...`
                                                : movieTitle}
                                        </h2>
                                        <img src={Poster} alt="#" />
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Movies;
