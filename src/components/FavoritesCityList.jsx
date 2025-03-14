import { useContext } from "react";
import WeatherDataContext from "../context/WeatherDataContext";

const FavoriteCityList = () => {

    const { favoriteCities, removeFavorite, handleSearch } = useContext(WeatherDataContext);

    const handleClick = (city) => {
        console.log(city);
        handleSearch(city);
    }

    return (
        <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4">
            <h3 className="text-lg font-semibold">Favorite Cities</h3>
            <ul className="mt-2">
                {favoriteCities.map((city, index) => (
                    <li key={index} className="flex justify-between items-center border-b py-2">
                        <span 
                            className="cursor-pointer hover:text-blue-500" 
                            onClick={() => handleClick(city)}
                        >
                            {city}
                        </span>
                        <button 
                            onClick={() => removeFavorite(city)}
                            className="text-red-500 text-sm hover:text-red-700"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FavoriteCityList;