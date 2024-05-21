import React from "react";
import styled from "styled-components";
import useTemplateName from "../hooks/useTemplateName";
import icon from "../assets/tick.svg";
import { SelectedItem } from "../types";

type SelectItemProps = {
  id: number;
  name: string;
  episode: number;
  image: string;
  searchTerm: string;
  selectIndex: number;
  index: number;
  selectedList: SelectedItem[];
  setSelectedItem: React.Dispatch<
    React.SetStateAction<SelectedItem | undefined>
  >;
  handleClick: (selectedItem: SelectedItem) => void;
};

export default function SelectItem({
  episode,
  id,
  name,
  image,
  searchTerm,
  selectIndex,
  index,
  selectedList,
  setSelectedItem,
  handleClick,
}: SelectItemProps) {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const nameTemplate = useTemplateName(searchTerm, name);
  const checkItem = selectedList.find((item) => item.id === id) ? true : false;

  React.useEffect(() => {
    if (index === selectIndex) {
      setSelectedItem({ id, name });

      itemRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [index, selectIndex, id, setSelectedItem, name]);

  return (
    <Wrapper
      $check={index === selectIndex}
      ref={itemRef}
      $checkItem={checkItem}
      onClick={() => handleClick({ id, name })}
    >
      <div className='check-container'>
        <img src={icon} alt='select check icon' />
      </div>
      <div className='img-container'>
        <img src={image} alt={`${name}'s image`} />
      </div>
      <div className='content'>
        {nameTemplate}
        <p>{`${episode} Episode${episode > 1 ? "s" : ""}`}</p>
      </div>
    </Wrapper>
  );
}

type StyleType = {
  $check: boolean;
  $checkItem: boolean;
};

const Wrapper = styled.div<StyleType>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  background-color: ${({ $check }) =>
    $check ? "var(--grey-200)" : "var(--grey-100)"};
  padding: 10px;
  cursor: pointer;

  .check-container {
    width: 20px;
    height: 20px;
    border: 1px solid var(--grey-500);
    padding: 3px;
    border-radius: 5px;
    background-color: ${({ $checkItem }) =>
      $checkItem ? "var(--blue)" : "transparent"};

    img {
      display: ${({ $checkItem }) => ($checkItem ? "block" : "none")};
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--grey-500);
  }

  .img-container {
    width: 30px;
  }

  .content {
    & p:last-child {
      color: var(--grey-600);
    }
  }
`;
