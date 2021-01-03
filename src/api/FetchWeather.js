import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

async function FetchWeather(query) {
  const { data } = await axios.get(BASE_URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
}

export default FetchWeather;
