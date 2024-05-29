import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { EmptyInputModalType } from "../../model/types";

function EmptyInputModal(props: EmptyInputModalType) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <p>할 일을 입력해 주세요.</p>
      </Modal.Body>
      <ModalStyle>
        <Modal.Footer>
          <Button className="btn" onClick={props.onHide}>
            확인
          </Button>
        </Modal.Footer>
      </ModalStyle>
    </Modal>
  );
}

const ModalStyle = styled.div`
  .modal-footer {
    border: none;
    .btn {
      background-color: ${(props) => props.theme.colors.main};
      color: ${(props) => props.theme.colors.text};
      border: none;
    }
  }
`;

export default EmptyInputModal;
