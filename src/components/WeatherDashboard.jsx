import { useContext } from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";
import WeatherDataContext from "../context/WeatherDataContext";
import Temp from '../assets/temp.png';

const WeatherDashboard = () => {

    const { weatherData, addFavorite } = useContext(WeatherDataContext);
    const { name, main, weather, sys } = weatherData;


    return (
        <div className="border border-gray-300 rounded-lg p-4 text-center space-y-2">
            
            <WeatherIcon iconCode={weather[0].icon} />

            <p className="text-xl font-semibold">{weather[0].description}</p>
            
            <p className="text-3xl font-bold flex justify-center">
                {Math.round(main.temp - 273.15)}°C 
                <img src={Temp} width="30px" height="20px" />
            </p>
            
            <p className="text-amber-800 text-xl font-extrabold">{name}</p>
            
            <p className="text-sm">Country Code: {sys.country}</p>

            <button 
                type="submit"
                key={name}
                onClick={() => addFavorite(name)}
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Save as Favorite
            </button>

            <WeatherDetails />
            
        </div>
    );
};

export default WeatherDashboard;
