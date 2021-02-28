import axios from "axios";
// base url to make requests to the movie database

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//making a get request
//instance.get('/foo-bar');//https://api.themoviedb.org/3/foob-bar
export default instance;
