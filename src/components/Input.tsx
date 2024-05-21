import styled from "styled-components";

import icon from "../assets/arrow.svg";

export default function Input() {
  return (
    <Wrapper htmlFor='search'>
      <input type='text' id='search' />
      <div className='icon-container'>
        <img src={icon} alt='arrow icon' />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 5px;

  input {
    border: none;
    outline: none;
    color: inherit;
  }

  .icon-container {
    width: 16px;
  }
`;
