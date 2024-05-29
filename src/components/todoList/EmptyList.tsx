import React from "react";
import styled from "styled-components";

function EmptyList() {
  return (
    <Container>
      <div> 할 일을 작성해 보세요!</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  color: #525252e2;
`;

export default EmptyList;
