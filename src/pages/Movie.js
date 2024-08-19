import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { movies } from "../data";

function Movie() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return (
      <div>
        <NavBar />
        <h1>Movie not found</h1>
        <p>The movie you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index} style={{ marginRight: "10px" }}>
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Movie;
