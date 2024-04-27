import { createContext, useContext, useState } from "react";
import { KEY, URL } from "./../constants/constants";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function getSearchData() {
    if (cityName.length === 0) return;
    try {
      setIsLoading(true);
      const data = await fetch(`${URL}/current.json?key=${KEY}&q=${cityName}`);
      const city = await data.json();
      setCity(city);
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
      value={{ getSearchData, city, setCityName, cityName, isLoading }}
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
