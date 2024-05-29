import styled from "styled-components";
import { BoxStyleType } from "../../model/types";

function BoxStyle({ bgColor, className, children }: BoxStyleType) {
  return (
    <Container color={bgColor} className={className}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${(props) => props.className === "write-to-do" && "absolute"};
  bottom: ${(props) => props.className === "write-to-do" && "0px"};
  width: inherit;
  height: ${(props) => props.theme.size.barHeight};
  padding: 0 10px;
  background-color: ${(props) => props.color};
  border-bottom: ${(props) =>
    props.className === "list-item" && `1px solid ${props.theme.colors.main}`};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.className === "header" && "30px"};
`;

export default BoxStyle;
