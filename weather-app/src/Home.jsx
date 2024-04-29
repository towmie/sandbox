import styled from "styled-components";
import MainContainer from "./ui/MainContainer";
import SideBar from "./SideBar";
import { WeatherProvider } from "./context/watherContext";

const StyledContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 36rem 1fr;
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
