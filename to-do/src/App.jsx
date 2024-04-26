import Heading from "./ui/Heading";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

import Form from "./ui/Form";
import List from "./ui/List";
import { TasksContextProvider } from "./context/taskContext";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledContainer = styled.div`
  margin-top: 5%;
  max-width: 720px;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

function App() {
  return (
    <TasksContextProvider>
      <GlobalStyles />
      <StyledMain>
        <StyledContainer>
          <Heading as="h1">Tasks for today</Heading>

          <Form />

          <List />
        </StyledContainer>
      </StyledMain>
    </TasksContextProvider>
  );
}

export default App;
