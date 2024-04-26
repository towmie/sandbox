import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "./Input";
import StyledButton from "./Button";
import { IoAddCircle } from "react-icons/io5";
import { useTasks } from "../context/taskContext";

const StyledForm = styled.form`
  display: flex;
  gap: 4px;

  & input {
    flex-grow: 1;
  }
`;

function Form() {
  const { register, handleSubmit, reset } = useForm();
  const { dispatch } = useTasks();

  function onSubmit(data) {
    const task = {
      value: data.task,
      status: false,
      id: Math.random(),
    };
    dispatch({ type: "task/added", payload: task });
    reset();
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("task")} placeholder="type the task" />

      <StyledButton type="primary">
        <IoAddCircle />
      </StyledButton>
    </StyledForm>
  );
}

export default Form;
