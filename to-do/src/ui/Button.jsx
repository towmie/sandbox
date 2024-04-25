import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-radius: 4px;
  font-size: 18px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: var(--color-grey-300);
      color: var(--color-grey-900);
      border: 1px solid var(--color-grey-900);

      &:hover {
        background-color: var(--color-grey-900);
        color: var(--color-grey-50);
      }
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: var(--color-grey-900);
      color: var(--color-grey-50);

      &:hover {
        background-color: var(--color-grey-300);
        color: var(--color-grey-900);
        border: 1px solid var(--color-grey-900);
      }
    `}
`;
StyledButton.defaultProps = {
  type: "primary",
};
export default StyledButton;
