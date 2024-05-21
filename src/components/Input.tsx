import styled from "styled-components";

import icon from "../assets/arrow.svg";

type SelectProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Input({ setSearchTerm, setShowSelect }: SelectProps) {
  return (
    <Wrapper htmlFor='search' onClick={() => setShowSelect(true)}>
      <input
        type='text'
        id='search'
        onChange={(evnt) => setSearchTerm(evnt.target.value)}
        placeholder='Search characters'
      />
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
    width: 100%;
    border: none;
    outline: none;
    color: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .icon-container {
    width: 16px;
    cursor: pointer;
  }
`;
