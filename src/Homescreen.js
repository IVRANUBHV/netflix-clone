import React from "react";
import Row from "./components/Row.js";
import requests from "./requests.js";
import Banner from "./components/Banner.js";
import Nav from "./components/Nav.js";
import "./Homescreen.css";
function Homescreen() {
  return (
    <div className="homeScreen">
      {/* Nav/Header */}
      <Nav></Nav>
      

      {/* Banner */}
      <Banner></Banner>
      
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow={true}
        fetchUrl={requests.fetchNetflixOriginals}
      ></Row>
      <Row title="Trending now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default Homescreen;
