import styled from "styled-components";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import { WeatherProvider } from "./context/watherContext";

const StyledContainer = styled.div`
  display: flex;
`;

function Home() {
  return (
    <WeatherProvider>
      <StyledContainer>
        <SideBar />
        <MainContainer />
      </StyledContainer>
    </WeatherProvider>
  );
}

export default Home;
