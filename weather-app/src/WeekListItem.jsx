import styled from "styled-components";
import Img from "./ui/Img";

const StyledWeekListItem = styled.div`
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-lg);
  padding: 2rem 2.5rem;
  width: calc(100% / 7);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & img {
    max-width: 64px;
  }
`;
function WeekListItem({ forecast }) {
  const {
    day: { maxtemp_c, mintemp_c, condition },
  } = forecast;

  return (
    <StyledWeekListItem>
      <Img src={condition.icon} />
      <p>{condition.text}</p>
      <p>
        <b>{maxtemp_c}°</b> / {mintemp_c}°
      </p>
    </StyledWeekListItem>
  );
}

export default WeekListItem;
