import styled from "styled-components";

import icon from "../assets/close.svg";
import { SelectedItem } from "../types";
import { Input } from ".";

type SelectedListProps = {
  selectedList: SelectedItem[];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (selectedItem: SelectedItem) => void;
};

export default function SelectedList({
  selectedList,
  setSearchTerm,
  setShowSelect,
  handleClick,
}: SelectedListProps) {
  return (
    <Wrapper>
      {selectedList.map((item) => (
        <div className='list-item' key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => handleClick({ id: item.id, name: item.name })}>
            <img src={icon} alt='selected item delete' />
          </button>
        </div>
      ))}

      <Input setSearchTerm={setSearchTerm} setShowSelect={setShowSelect} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 600px;
  min-height: 52px;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 10px 5px 5px;
  border-radius: 13px;
  border: 1px solid var(--grey-500);

  .list-item {
    min-width: max-content;
    flex: 1;
    justify-content: space-between;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: var(--grey-200);
    padding: 5px 10px;
    border-radius: 10px;

    button {
      border: none;
      background-color: var(--grey-500);
      border-radius: 5px;
      padding: 3px;
    }
  }
`;
