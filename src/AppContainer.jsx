import SearchBar from "./components/SearchBar";
import DateTime from "./components/DateTime";
import WeatherContent from "./components/WeatherContent";
import { DataProvider } from "./context/WeatherDataContext";
import FavoriteCityList from "./components/FavoritesCityList";

const AppContainer = () => {

    return (
        <div className="app-container">
            <DataProvider>
                <h1 className="app-name">Weather App</h1>
                <SearchBar />
                <DateTime />
                <WeatherContent />
                <FavoriteCityList />
            </DataProvider>
        </div>
    );
};

export default AppContainer;