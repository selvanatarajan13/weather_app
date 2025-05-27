import { useContext, useState } from "react";
import WeatherDataContext from "../context/WeatherDataContext";

const SearchBar = ({ onSearch }) => {

    const { handleSearch } = useContext(WeatherDataContext);

    const [city, setCity] = useState("");

    
    const handleItem = (e) => {
        setCity(e.target.value);
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Console ",city);
        // if (!city.trim()) return;
        handleSearch(city);
        setCity("");

    };

    return (
        <form onSubmit={handleSubmit} className="Search-form">
            <input 
                type="text"
                value={city}
                placeholder="Enter city name..."
                className="Search-input"
                onChange={handleItem}
                autoFocus
            />
            <button type="submit" className="Search-btn">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
