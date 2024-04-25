import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-size: 50px;
  font-weight: 600;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      margin-bottom: 3rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 2rem;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 1.25rem;
    `}
`;

export default Heading;
