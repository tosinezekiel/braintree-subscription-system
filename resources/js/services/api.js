import axios from "axios";

const instance = axios.create({
  baseURL: "http://advance-stream-stats/api",
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json"
  },
});

export default instance;