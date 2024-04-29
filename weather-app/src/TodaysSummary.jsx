import { format } from "date-fns";
import Heading from "./ui/Heading";
import Img from "./ui/Img";
import styled from "styled-components";
import CityName from "./ui/CityName";

const Container = styled.div`
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid var(--color-grey-200);
  width: 100%;
  text-align: center;
`;

const StyledTodaysSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function TodaysSummary({ forecast }) {
  const { name, currentTemp, lastUpdated, condition, feelsLikeTemp } = forecast;

  return (
    <StyledTodaysSummary>
      <Img src={condition.icon} alt="" />
      <Heading as="h1" type="primary">
        {currentTemp}°
      </Heading>
      <p>{format(new Date(lastUpdated), "EEEE do")}</p>
      <Container>
        <span>
          Feels like: <b>{feelsLikeTemp}°</b>
        </span>
        <p>
          <b>{condition.text}</b>
        </p>
      </Container>
      <Container>{name && <CityName name={name} />}</Container>
    </StyledTodaysSummary>
  );
}

export default TodaysSummary;
