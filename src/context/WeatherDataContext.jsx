import { createContext, useState, useEffect } from "react";
import WeatherService from "../utils/WeatherService";

const WeatherDataContext = createContext();

export const DataProvider = ({ children }) => {

    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");
    const [favorite, setFavorite] = useState([]);
    
    const handleSearch = async (city) => {

        if (!city) {
            //console.log("city name is required!")
            return;
        }

        try {
            const response = await WeatherService(city);
            if (response.cod === 200) {
                setWeatherData(response);
                setError(""); // Clear previous errors
                // console.log(response);
            } else {
                setWeatherData(null)
                throw new Error(response.data.message || "City not found");
            }
        } catch (error) {
            setWeatherData(null)
            setError("City not found. Please try again. Enter correct city name..");
            // console.error("Error fetching weather:", error);
        }
    };



    // useEffect(() => {
    //     handleSearch(); // Default city
    // }, []);

    // Load favorites from localStorage when app starts
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favoriteCities")) || [];
        setFavorite(storedFavorites);
    }, []);

    // const [favorite, setFavorite] = useState(() => {
    //     return JSON.parse(localStorage.getItem("favorites")) || [];
    // });

    // Update localStorage whenever favorites change
    useEffect(() => {
        localStorage.setItem("favoriteCities", JSON.stringify(favorite));
    }, [favorite]);

    const addFavorite = (city) => {
        if (!favorite.includes(city)) {
            // console.log(city)
            setFavorite([...favorite, city]);
        }
    };

    const removeFavorite = (city) => {
        // console.log(city);
        setFavorite(favorite.filter(fav => fav !== city));
    };

    return (
        <WeatherDataContext.Provider value={{
            weatherData, error, handleSearch, favorite, addFavorite, removeFavorite
        }}>
            {children}
        </WeatherDataContext.Provider>
    )
}

export default WeatherDataContext;