const WeatherIcon = ({ iconCode }) => {
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return (
        <img src={iconUrl} alt="Weather icon" className="h-20 w-20 mx-auto shadow" />
    );
};

export default WeatherIcon;
