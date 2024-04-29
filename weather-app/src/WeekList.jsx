import { useEffect, useState } from "react";
import { KEY } from "./constants/constants";
import { URL } from "./constants/constants";
import { useWeather } from "./context/watherContext";
import WeekListItem from "./WeekListItem";
import styled from "styled-components";

const StyledWeekList = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 10px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

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
    <StyledWeekList>
      {weekForecast.forecastday?.map((forecast) => (
        <WeekListItem key={Math.random()} forecast={forecast} />
      ))}
    </StyledWeekList>
  );
}

export default WeekList;
