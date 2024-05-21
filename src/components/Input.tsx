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
        autoComplete='off'
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
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 42px;
  flex: 2;

  input {
    width: 100%;
    border: none;
    outline: none;
    color: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 100%;
  }

  .icon-container {
    width: 16px;
    cursor: pointer;
  }
`;
