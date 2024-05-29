import React from "react";
import { useRecoilState } from "recoil";
import { pickedDateState } from "../../recoil/Atom";
import styled from "styled-components";
import BoxStyle from "../styles/Box.style";
import { theme } from "../../assets/styles/theme";

function Header() {
  const [pickedDate, setPickedDate] = useRecoilState(pickedDateState);
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickedDate(e.target.value);
  };

  return (
    <BoxStyle bgColor={theme.colors.main} className="header">
      <div>
        <div>To Do List</div>
      </div>
      <DateInput type="date" value={pickedDate} onChange={handleDate} />
    </BoxStyle>
  );
}

const DateInput = styled.input`
  max-width: 110px;
  margin-right: 10px;
  font-size: 15px;

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;

export default Header;
