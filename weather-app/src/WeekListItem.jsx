import styled from "styled-components";
import Img from "./ui/Img";
import StyledCardItem from "./ui/CardItem";
import { format } from "date-fns";

const StyledWeekListItem = styled.div`
  width: calc(100% / 7);

  & img {
    max-width: 64px;
  }

  & span {
    line-height: 1;
    font-size: 18px;
  }
`;

function WeekListItem({ forecast }) {
  const {
    date,
    day: { maxtemp_c, mintemp_c, condition },
  } = forecast;

  return (
    <StyledWeekListItem>
      <StyledCardItem>
        <Img src={condition.icon} />
        <span>
          <b>{condition.text}</b>
        </span>
        <p>{format(new Date(date), "EEEE")}</p>
        <p>
          <b>{maxtemp_c}°</b> / {mintemp_c}°
        </p>
      </StyledCardItem>
    </StyledWeekListItem>
  );
}

export default WeekListItem;
