import React, { useState, useEffect } from "react";
import axios from "../axios.js";
import requests from "../requests.js";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [movie, setMovie] = useState([]);
  const url = requests.fetchNetflixOriginals;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);

      let random_index = Math.floor(
        Math.random() * request.data.results.length
      );
      setMovie(request.data.results[random_index]);
      return request;
    }
    fetchData();
  }, [url]);
  //console.log(movie);
  let trauncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${base_url}${movie?.backdrop_path}"

              )`,
        backgroundPosition: "50% 3%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-content">
        {/*title*/}
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/*2 buttons */}
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner-description">
          {trauncate(movie?.overview, 200)}
        </h1>
      </div>

      <div className="fade-bottom"></div>
    </header>
  );
}

export default Banner;
