import { useContext } from "react";
import WeatherDataContext from "../context/WeatherDataContext";

const ErrorHandle = () => {

    const {error} = useContext(WeatherDataContext);

    return (
        <div className="text-center text-red-500 font-bold py-2">
            {error}
        </div>
    )
}

export default ErrorHandle;