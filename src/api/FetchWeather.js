import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.REACT_APP_BASE_URL);

async function FetchWeather(query) {
  const { data } = await axios.get(process.env.REACT_APP_BASE_URL, {
    params: {
      q: query,
      units: "metric",
      APPID: process.env.REACT_APP_API_KEY,
    },
  });
  return data;
}

export default FetchWeather;
