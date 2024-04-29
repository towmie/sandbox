import styled from "styled-components";
import Loupe from "./../data/loupe.svg";

const Form = styled.form`
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 50%;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    background-image: url(${Loupe});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: 2;
  }
`;

export default Form;
