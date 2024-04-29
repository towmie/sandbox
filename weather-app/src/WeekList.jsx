import { useEffect, useState } from "react";
import { KEY } from "./constants/constants";
import { URL } from "./constants/constants";
import { useWeather } from "./context/watherContext";
import WeekListItem from "./WeekListItem";

function WeekList() {
  const [weekForecast, setWeekForecast] = useState([]);
  const { cityName } = useWeather();

  useEffect(
    function () {
      if (cityName === "") return;
      //   let ignore = false;

      async function fetchWeekForecast() {
        try {
          const data = await fetch(
            `${URL}/forecast.json?key=${KEY}&q=${cityName}&days=7`
          );
          const { forecast } = await data.json();
          //   if (!ignore) {
          setWeekForecast(forecast);
          //   }
        } catch (error) {
          throw new Error(error.message);
        }
      }
      fetchWeekForecast();

      //   return () => {
      //     ignore = true;
      //   };
    },
    [cityName]
  );

  return (
    <div>
      {weekForecast.forecastday?.map((el) => (
        <WeekListItem key={Math.random()}>{el.date}</WeekListItem>
      ))}
    </div>
  );
}

export default WeekList;
