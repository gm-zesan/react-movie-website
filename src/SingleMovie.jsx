import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGlobalContext } from "./Context";

const SingleMovie = () => {
    const { id } = useParams();
    const { isLoading } = useGlobalContext();
    const [movie, setMovie] = useState({});

    const url = `https://www.omdbapi.com/?apikey=727bbdc1&i=${id}`;
    const getSingleMovie = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovie(data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getSingleMovie();
    }, [id]);

    if (isLoading) {
        return (
            <section className="movie-section ">
                <div className="loading">Loading....</div>;
            </section>
        );
    }
    return (
        <section className="movie-section">
            <div className="movie-card">
                <figure>
                    <img src={movie?.Poster} alt="" />
                </figure>
                <div className="card-content">
                    <p className="title">{movie.Title}</p>
                    <p className="card-text">{movie.Runtime}</p>
                    <p className="card-text">{movie.Released}</p>
                    <p className="card-text">{movie.Genre}</p>
                    <p className="card-text">{movie.imdbRating} / 10</p>
                    <p className="card-text">{movie.Country}</p>
                    <NavLink to="/" className="back-btn">
                        Go Back
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default SingleMovie;
