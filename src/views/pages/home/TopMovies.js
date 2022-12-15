import React, { useEffect, useState } from "react";
import TopMovie from "./TopMovie";

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=bdb88397a84e36d072c6363aa30b12e4"
    )
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);
  return (
    <div>
      <h2>movies {movies.length}</h2>
      <div className="grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {movies.map(movie => (
          <TopMovie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
