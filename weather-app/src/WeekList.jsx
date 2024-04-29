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
  const {
    forecast: { weekForecast },
  } = useWeather();

  return (
    <>
      <StyledWeekList>
        {weekForecast?.map((forecast) => (
          <WeekListItem key={Math.random()} forecast={forecast} />
        ))}
      </StyledWeekList>
    </>
  );
}

export default WeekList;
