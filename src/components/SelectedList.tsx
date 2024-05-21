import styled from "styled-components";

import icon from "../assets/close.svg";
import { SelectedItem } from "../types";

type SelectedListProps = {
  selectedList: SelectedItem[];
};

export default function SelectedList({ selectedList }: SelectedListProps) {
  return (
    <Wrapper>
      {selectedList.map((item) => (
        <div className='list-item'>
          <p>{item.name}</p>
          <button onClick={() => console.log(item.id)}>
            <img src={icon} alt='selected item delete' />
          </button>
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 5px;

  .list-item {
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
