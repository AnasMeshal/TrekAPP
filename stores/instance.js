import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.20.10.3:8000",
  // baseURL: "https://gentle-shore-83533.herokuapp.com",
});

export default instance;
