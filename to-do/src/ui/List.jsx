import styled from "styled-components";
import { useTasks } from "../context/taskContext";
import ListItem from "./ListItem";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 16px;
`;

function List() {
  const { state: tasks } = useTasks();

  return (
    <StyledList>
      {tasks.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </StyledList>
  );
}
export default List;
