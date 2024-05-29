import styled from "styled-components";
import Header from "./components/header/Header";
import List from "./components/todoList/List";
import WriteTodo from "./components/todoInput/WriteTodo";

function App() {
  return (
    <AppContainer>
      <Header />
      <List />
      <WriteTodo />
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
