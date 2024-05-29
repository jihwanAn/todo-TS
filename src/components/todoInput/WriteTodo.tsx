import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { toDoArr } from "../../recoil/Atom";
import styled from "styled-components";
import BoxStyle from "../styles/Box.style";
import EmptyInputModal from "../modals/EmptyInputModal";
import { theme } from "../../assets/styles/theme";

function WriteTodo() {
  const [listArr, setListArr] = useRecoilState(toDoArr);
  const [inputToDo, setInputToDo] = useState("");
  const [showEmptyInputModal, setShowEmptyInputModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputToDo(e.target.value);
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();

    if (inputToDo === "") {
      setShowEmptyInputModal(true);
      return;
    }

    const newIdx = listArr.length ? listArr[listArr.length - 1].idx + 1 : 0;
    setListArr([...listArr, { idx: newIdx, content: inputToDo }]);
    setInputToDo("");
    inputRef.current?.focus();
  }

  return (
    <Container onSubmit={handleSave}>
      <BoxStyle bgColor={theme.colors.main} className="write-to-do">
        <input
          ref={inputRef}
          placeholder="할 일을 입력해 주세요"
          value={inputToDo}
          onChange={handleInput}
          size={33}
          spellCheck="false"
        />
        <button type="submit" className="btn btn-light btn btn-outline-success">
          등록
        </button>
      </BoxStyle>

      <EmptyInputModal
        show={showEmptyInputModal}
        onHide={() => setShowEmptyInputModal(false)}
      />
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  width: inherit;

  input,
  button {
    font-size: 17px;
  }

  input {
    background-color: #eaf5ff;
    border-radius: 4px;
    height: 32px;
    padding-left: 4px;
  }

  button {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default WriteTodo;
