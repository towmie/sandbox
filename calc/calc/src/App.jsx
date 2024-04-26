// import NumberList from "./ui/NumberList";
// import Symbols from "./ui/Symbols";
import { useReducer } from "react";
import styled from "styled-components";

const StyledContainer = styled.main`
  display: grid;
  max-width: 720px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
`;

function App() {
  const initialState = {
    currentNumber: "",
    nextNumber: "",
    result: "",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "sum":
        return {...state, result: state.currentNumber + action.payload};
      case "subtract":
        return {...state, result: +state.currentNumber - +action.payload};
      case "devide":
        return {...state, result: +state.currentNumber / +action.payload};
      case "devide":
        return {...state, result: +state.currentNumber / +action.payload};
    }
  }
  const { {result}, dispatch } = useReducer(reducer, initialState);
  return (
    <StyledContainer>
      <ul>
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <div>
        <button>C</button>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
      <span>Result: {result}</span>
      {/* <NumberList /> */}
      {/* <Symbols /> */}
    </StyledContainer>
  );
}

export default App;
