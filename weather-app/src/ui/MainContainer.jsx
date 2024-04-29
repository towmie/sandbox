import styled from "styled-components";
import WeekList from "../WeekList";
import Heading from "./Heading";
import Highlights from "../Highlights";
import { useWeather } from "../context/watherContext";
import Spinner from "./Spinner";

const StyledMainContainer = styled.main`
  border-top-right-radius: calc(var(--border-radius-lg) * 2);
  border-bottom-right-radius: calc(var(--border-radius-lg) * 2);
  background-color: var(--color-grey-0);

  padding: 4rem 4.8rem 6.4rem;
  overflow-y: scroll;
  grid-row: 1 / -1;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyledHeader = styled.header`
  /* display: flex;
  justify-content: fl;
  align-items: center; */
  margin-bottom: 4rem;
`;

function MainContainer() {
  const { isLoading } = useWeather();
  function getGreeting() {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      return "Good morning";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  return (
    <StyledMainContainer>
      <StyledHeader>
        <Heading as="h2">{getGreeting()}</Heading>
      </StyledHeader>
      <StyledContainer>
        <WeekList />
        {!isLoading && <Highlights />}
      </StyledContainer>
    </StyledMainContainer>
  );
}

export default MainContainer;
