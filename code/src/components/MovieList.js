import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { API_MOVIE_LIST } from "./Links";
import { OverLay } from "./OverLay";
import { Loader } from "./Loader";
import "../index.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(API_MOVIE_LIST)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("something went wrong");
        }
      })
      .then((json) => {
        setMovies(json.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [setLoading]);

  return (
    <div className="grid">
      {loading && (
        <div className="loader-wrapper">
          <Loader color={"goldenrod"} width={120} height={120} />
          <p className="lazy-data-loader">
            Data is lazy today{" "}
            <span role="img" aria-label="smile">
              &#128512;
            </span>
            . Let's wait a little...{" "}
          </p>
        </div>
      )}
      {error && (
        <div className="error-container">
          <p className="error-p">
            This is an error page. This happend because of {error}
          </p>
          <Link to="/">
            <button className="go-back-button">To movies</button>
          </Link>
        </div>
      )}

      {movies.map((movie) => (
        <div className="movie-container" key={movie.id}>
          <img
            alt={`${movie.original_title} `}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
          <Link to={`/movieDetails/${movie.id}`}>
            <OverLay>
              <h2>{movie.original_title}</h2>
              <p>Released {moment(movie.release_date).format("MMM Do YY")}</p>
            </OverLay>
          </Link>
        </div>
      ))}
    </div>
  );
};
