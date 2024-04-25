import { useReducer } from "react";
import { useForm } from "react-hook-form";
import Heading from "./ui/Heading";
import GlobalStyles from "./styles/GlobalStyles";
import ListItem from "./ui/ListItem";
import styled from "styled-components";
import StyledList from "./ui/List";
import StyledButton from "./ui/Button";
import Input from "./ui/Input";
import Form from "./ui/Form";
import { IoAddCircle } from "react-icons/io5";

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
  const { register, handleSubmit, reset } = useForm();

  const initialState = {
    tasks: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case "task/checked":
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, status: !task.status }
              : task
          ),
        };
      case "task/deleted":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case "task/added": {
        return { ...state, tasks: [...state.tasks, action.payload] };
      }
    }
  }

  const [{ tasks }, dispatch] = useReducer(reducer, initialState);

  function onSubmit(data) {
    const task = {
      value: data.task,
      status: false,
      id: Math.random(),
    };
    dispatch({ type: "task/added", payload: task });
    reset();
  }

  function markAsSolved(id) {
    dispatch({ type: "task/checked", payload: id });
  }
  function deleteTask(id) {
    dispatch({ type: "task/deleted", payload: id });
  }

  return (
    <>
      <GlobalStyles />
      <StyledMain>
        <StyledContainer>
          <Heading as="h1">Tasks for today</Heading>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("task")} placeholder="type the task" />

            <StyledButton type="primary">
              <IoAddCircle />
            </StyledButton>
          </Form>

          <StyledList>
            {tasks.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                markAsSolved={markAsSolved}
                deleteTask={deleteTask}
              />
            ))}
          </StyledList>
        </StyledContainer>
      </StyledMain>
    </>
  );
}

export default App;
