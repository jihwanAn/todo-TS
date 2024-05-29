import styled from "styled-components";
import Header from "./components/header/Header";

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  width: 400px;
  height: 650px;
  background-color: #ffffff;
`;

export default App;
