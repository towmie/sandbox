import { createContext, useContext, useState } from "react";
import { KEY, URL } from "./../constants/constants";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [cityName, setCityName] = useState("rome");
  const [forecast, setForecast] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function createObj(data) {
    return {
      name: data.location.name,
      pressure: data.current.pressure_in,
      country: data.location.country,
      currentTemp: data.current.temp_c,
      feelsLikeTemp: data.current.feelslike_c,
      lastUpdated: data.current.last_updated,
      condition: data.current.condition,
      uv: data.current.uv,
      visibility: data.current.vis_km,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
      weekForecast: data.forecast.forecastday,
    };
  }

  async function getSearchData() {
    if (cityName.length === 0) return;
    try {
      setIsLoading(true);

      const data = await fetch(
        `${URL}/forecast.json?key=${KEY}&q=${cityName}&days=7`
      );
      const forecastData = await data.json();
      setForecast(createObj(forecastData));
      setIsLoading(false);
      setCityName("");
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <WeatherContext.Provider
      value={{ getSearchData, forecast, setCityName, cityName, isLoading }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  if (context === "undefined") throw new Error("Error");
  return context;
}

export { WeatherProvider, useWeather };
