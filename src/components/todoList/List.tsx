import React from "react";
import styled from "styled-components";
import { toDoArr } from "../../recoil/Atom";
import { useRecoilState } from "recoil";
import EmptyList from "./EmptyList";
import ListItem from "./ListItem";

function List() {
  const [listArr] = useRecoilState(toDoArr);

  return (
    <Container>
      {!listArr.length && <EmptyList />}
      {listArr.map((list) => {
        return (
          <ListItem key={list.idx} idx={list.idx} content={list.content} />
        );
      })}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default List;
