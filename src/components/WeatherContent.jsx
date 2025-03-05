import { useContext } from "react";
import ErrorHandle from "./ErrorHandle";
import Started from "./Started";
import WeatherDashboard from "./WeatherDashboard";
import WeatherDataContext from "../context/WeatherDataContext";

const WeatherContent = () => {

    const {error, weatherData} = useContext(WeatherDataContext);

    return (
        <>
            {/* Show error message if API returns an error */}
            {error && (
                <ErrorHandle />
            )}

            {
                weatherData ?
                (<WeatherDashboard />) : (
                    !error && (    
                        <Started />
                    )
                )
            }
        </>
    )
}

export default WeatherContent;