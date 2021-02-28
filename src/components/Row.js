import React, { useState, useEffect } from "react";
import axios from "../axios.js";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code that runs on the  condition
  // When this row loads make a request to TMDB
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //we have to inclue the fetchURL
      //as it becomes a dependency
      //if this changes we call useEffect

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //console.table(movies);

  const POSTERS = movies.map((movie) => (
    <img
      key={movie.id}
      className={`poster ${isLargeRow && "poster-xl"}`}
      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
      alt={movie.name}
    />
  ));
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container - movie poster*/}
      <div className="row-posters">{POSTERS}</div>
    </div>
  );
}

export default Row;
