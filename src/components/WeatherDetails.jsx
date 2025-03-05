import { useContext } from "react";
import WeatherDataContext from "../context/WeatherDataContext";
import Humidity from "../assets/humidity.svg";
import WindSpeed from "../assets/wind-speed.svg";
import Visibility from "../assets/visibility_icon.svg";
import Pressure from "../assets/pressure.png";

const WeatherDetails = () => {

    const { weatherData } = useContext(WeatherDataContext);
    const { main, wind, visibility } = weatherData;

    return (
        <div className="grid grid-cols-2 gap-5 mt-4 text-gray-600">
            <div className="flex flex-col items-center">
                <img src={Humidity} width="30px" height="20px" className="flex justify-center" />
                <p className="font-bold">Humidity</p>
                <p>{main.humidity}%</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={WindSpeed} width="30px" height="20px" className="flex justify-center" />
                <p className="font-bold">Wind Speed:</p>
                <p>{wind.speed} m/s</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={Visibility} width="30px" height="20px" className="flex justify-center" />
                <p className="font-bold">Visibility:</p>
                <p>{ visibility / 1000} km</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={Pressure} width="30px" height="20px" className="flex justify-center" />
                <p className="font-bold">Pressure:</p>
                <p>{main.pressure} hPa</p>
            </div>
        </div>
    );
};

export default WeatherDetails;
