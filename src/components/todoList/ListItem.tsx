import React, { useRef, useState } from "react";
import { toDoArr } from "../../recoil/Atom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import BoxStyle from "../styles/Box.style";
import { ListItemType } from "../../model/types";
import EmptyInputModal from "../../components/modals/EmptyInputModal";

function ListItem({ idx, content }: ListItemType) {
  const [, setListArr] = useRecoilState(toDoArr);
  const [checked, setChecked] = useState(false);
  const [beingModify, setBeingModify] = useState(false);
  const [inputContent, setInputContent] = useState(content);
  const [showEmptyInputModal, setShowEmptyInputModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputContent(e.target.value);
  }

  function toggleModify() {
    setBeingModify(!beingModify);

    if (inputRef.current !== null && !beingModify) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    } else if (inputRef.current !== null && beingModify) {
      inputRef.current.disabled = true;
    }
  }

  function saveModify() {
    if (inputContent === "") {
      setShowEmptyInputModal(true);
      return;
    }

    setBeingModify(false);
    setListArr((prevListArr) =>
      prevListArr.map((item) =>
        item.idx === idx ? { ...item, content: inputContent } : item
      )
    );
  }

  function deleteItem() {
    setListArr((prevListArr) => prevListArr.filter((item) => item.idx !== idx));
  }

  return (
    <Container checked={checked}>
      <BoxStyle className="list-item">
        <ListBox>
          <input
            className="form-check-input"
            type="checkbox"
            onClick={toggleChecked}
            disabled={beingModify}
            style={{ cursor: "pointer" }}
          />
          <input
            ref={inputRef}
            type="text"
            value={inputContent}
            onChange={handleInput}
            onKeyDown={(e) => e.key === "Enter" && setBeingModify(false)}
            disabled={!beingModify}
            autoComplete="off"
            spellCheck="false"
          />
        </ListBox>

        {beingModify ? (
          <button
            onClick={saveModify}
            className="btn btn-light btn-outline-success btn-sm"
          >
            수정 완료
          </button>
        ) : (
          <BtnWrap>
            {!checked && (
              <button
                onClick={toggleModify}
                className="btn btn-light btn-outline-info btn-sm"
              >
                수정
              </button>
            )}

            <button
              onClick={deleteItem}
              className="btn btn-light btn-outline-danger btn-sm"
            >
              삭제
            </button>
          </BtnWrap>
        )}
      </BoxStyle>

      <EmptyInputModal
        show={showEmptyInputModal}
        onHide={() => setShowEmptyInputModal(false)}
      />
    </Container>
  );
}

const Container = styled.div<{ checked: boolean }>`
  width: 100%;

  input {
    color: ${(props) =>
      props.checked ? props.theme.colors.grayText : props.theme.colors.text};
    text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  }
`;

const ListBox = styled.div`
  :nth-child(2) {
    margin-left: 10px;
    width: 240px;
  }
`;

const BtnWrap = styled.div`
  :nth-child(2) {
    margin-left: 10px;
  }
`;

export default ListItem;
