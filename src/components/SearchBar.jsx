import { useContext, useState } from "react";
import WeatherDataContext from "../context/WeatherDataContext";

const SearchBar = ({ onSearch }) => {

    const { handleSearch } = useContext(WeatherDataContext);

    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // /console.log("Console ",city);
        handleSearch(city);
    };

    const handleItem = (e) => {
        setCity(e.target.value);
        // console.log(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="Search-form">
            <input 
                type="text"
                name="city"
                placeholder="Enter City name..."
                className="Search-input"
                onChange={handleItem}
            />
            <button type="submit" className="Search-btn">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
