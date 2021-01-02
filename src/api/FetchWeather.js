import axios from "axios";

// const BASE_URL = process.env.BASE_URL;
// const API_KEY = process.env.API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "ace71986cb28addd3a6e2aafd7084f41";

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
