import styled, { css } from "styled-components";
import StyledButton from "./Button";
import Input from "./Input";
import { useState } from "react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/taskContext";

const StyledLi = styled.li`
  padding: 8px 16px;
  font-size: 18px;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-200);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.status === "done" &&
    css`
      background-color: var(--color-grey-100);
      color: var(--color-grey-300);
    `}
`;

const StyledMenu = styled.div`
  display: flex;
  gap: 2px;
  padding-left: 16px;
`;

function ListItem({ item }) {
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit } = useForm();
  const { dispatch } = useTasks();

  function markAsSolved(id) {
    dispatch({ type: "task/checked", payload: id });
  }
  function deleteTask(id) {
    dispatch({ type: "task/deleted", payload: id });
  }

  function updateTask(data) {
    dispatch({ type: "task/updated", payload: data });
    setEdit(false);
  }

  return (
    <StyledLi status={!item.status ? "unmark" : "done"}>
      {!edit ? (
        <span>{item.value}</span>
      ) : (
        <form onSubmit={handleSubmit(updateTask)}>
          <Input {...register("value")} placeholder={item.value} type="text" />
          <Input {...register("id")} value={item.id} type="hidden" />
        </form>
      )}

      <StyledMenu>
        <StyledButton type="secondary" onClick={() => markAsSolved(item.id)}>
          <FaCheckCircle />
        </StyledButton>
        <StyledButton onClick={() => setEdit((edit) => !edit)} type="secondary">
          <RiPencilFill />
        </StyledButton>

        <StyledButton type="secondary" onClick={() => deleteTask(item.id)}>
          <FaTrash />
        </StyledButton>
      </StyledMenu>
    </StyledLi>
  );
}

export default ListItem;
