import React from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { movies } from "../data";

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
