import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "a09724e0f5377b9e01ac85a68f8cb649";

const WeatherService = async (city) => {
    const response = axios.get(`${API_URL}?q=${city}&appid=${API_KEY}`);
    return (await response).data;
};

export default WeatherService;
