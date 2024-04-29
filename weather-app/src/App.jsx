import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 2rem;
  background-color: var(--color-grey-400);
  min-height: 100vh;
  height: 100%;
`;

function App() {
  return (
    <StyledWrapper>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </StyledWrapper>
  );
}

export default App;
