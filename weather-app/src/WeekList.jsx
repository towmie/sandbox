import { useEffect, useState } from "react";
import { KEY } from "./constants/constants";
import { URL } from "./constants/constants";
import { useWeather } from "./context/watherContext";

function WeekList() {
  const [{ forecastday }, setWeekForecast] = useState([]);
  const { cityName } = useWeather();

  useEffect(
    function () {
      if (cityName === "") return;
      const controller = new AbortController();
      let ignore = false;

      async function fetchWeekForecast() {
        try {
          const data = await fetch(
            `${URL}/forecast.json?key=${KEY}&q=${cityName}&days=7`,
            { signal: controller.signal }
          );
          const { forecast } = await data.json();
          if (!ignore) {
            setWeekForecast(forecast);
          }
        } catch (error) {
          throw new Error(error.message);
        }
      }
      fetchWeekForecast();
      return () => {
        controller.abort();
      };
    },
    [cityName]
  );
  console.log(forecastday);
  return (
    <div>
      {forecastday.map((el) => (
        <li key={el.id}>{el.date}</li>
      ))}
    </div>
  );
}

export default WeekList;
