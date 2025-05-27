import { createContext, useState, useEffect } from "react";
import WeatherService from "../utils/WeatherService";

const WeatherDataContext = createContext();

export const DataProvider = ({ children }) => {

    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const [favoriteCities, setFavoriteCities] = useState(() => {
        const storedCities = JSON.parse(localStorage.getItem("favoriteCitiesList"));
            return storedCities || [];
    });
    
    const handleSearch = async (city) => {

        const data = city.trim();
        if (!data) {
            setError("Please ensure enter the city name before clicking search button");
            return;
        }

        console.log(city);

        try {
            const response = await WeatherService(city);
            if (response.cod === 200) {
                setWeatherData(response);
                setError(""); // Clear previous errors
            } else {
                setWeatherData(null)
                throw new Error(response.data.message || "City not found");
            }
        } catch (error) {
            setWeatherData(null)
            setError("City not found. Please try again. Enter correct city name..");
        }
    };

    // useEffect(() => {
    //     const storedCities = JSON.parse(localStorage.getItem("favoriteCitiesList"));
    //     if(storedCities != null) {
    //         setFavoriteCities(storedCities)
    //     } else {
    //         setFavoriteCities([]);
    //     }
    // }, [])
    

    useEffect(() => {
        localStorage.setItem("favoriteCitiesList", JSON.stringify(favoriteCities));
    }, [favoriteCities])



    const addFavorite = (cityName) => {
        if (!favoriteCities.includes(cityName)) {
            setFavoriteCities([...favoriteCities, cityName]);
        }
    }

    
    const removeFavorite = (cityName) => {
        setFavoriteCities(favoriteCities.filter(fav => fav !== cityName));
    };

    return (
        <WeatherDataContext.Provider value={{
            weatherData, error, handleSearch, favoriteCities, addFavorite, removeFavorite
        }}>
            {children}
        </WeatherDataContext.Provider>
    )
}

export default WeatherDataContext;