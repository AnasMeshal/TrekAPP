import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000", // Sarah's base url
  //  baseURL: "http://172.20.10.3:8000", ; Anas' base url
  // baseURL: "https://gentle-shore-83533.herokuapp.com",
});

export default instance;
