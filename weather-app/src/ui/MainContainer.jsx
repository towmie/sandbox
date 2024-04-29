import styled from "styled-components";
import WeekList from "../WeekList";

const StyledMainContainer = styled.main`
  border-top-right-radius: calc(var(--border-radius-lg) * 2);
  border-bottom-right-radius: calc(var(--border-radius-lg) * 2);
  background-color: var(--color-grey-0);

  padding: 4rem 4.8rem 6.4rem;
  overflow-y: scroll;
  grid-row: 1 / -1;
`;

const StyledContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function MainContainer() {
  return (
    <StyledMainContainer>
      <StyledHeader>
        <div>
          <button>°C</button>
          <button>°F</button>
        </div>
      </StyledHeader>
      <StyledContainer>
        <WeekList />
        <div>Todays Higlights</div>
      </StyledContainer>
    </StyledMainContainer>
  );
}

export default MainContainer;
