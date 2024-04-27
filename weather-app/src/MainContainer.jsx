import styled from "styled-components";
import WeekList from "./WeekList";

const StyledMainContainer = styled.main`
  width: 70%;
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
      <WeekList />
      <div>Todays Higlights</div>
    </StyledMainContainer>
  );
}

export default MainContainer;
