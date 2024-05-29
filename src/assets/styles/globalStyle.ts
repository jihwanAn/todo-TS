import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #F2F2F2;
    color:${(props) => props.theme.colors.text};
    font-size: 18px;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
