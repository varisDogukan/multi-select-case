import styled from "styled-components";
import useFetchAPI from "../hooks/useFetchAPI";
import { Item, SelectedItem } from "../types";
import SelectItem from "./SelectItem";
import React from "react";

const ENDPOINT = "https://rickandmortyapi.com/api/character";

type SelectProps = {
  searchTerm: string;
  selectedList: SelectedItem[];
  handleClick: (selectedItem: SelectedItem) => void;
  backward: boolean;
};

export default function Select({
  searchTerm,
  selectedList,
  handleClick,
  backward,
}: SelectProps) {
  const { searchResults, status } = useFetchAPI(ENDPOINT, searchTerm);
  const [selectIndex, setSelectIndex] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState<SelectedItem>();

  React.useEffect(() => {
    const handleKey = (evnt: KeyboardEvent) => {
      if (evnt.key === "ArrowUp") {
        setSelectIndex(
          selectIndex === 0 ? searchResults.length - 1 : selectIndex - 1
        );
      }

      if (evnt.key === "ArrowDown") {
        setSelectIndex(
          selectIndex === searchResults.length - 1 ? 0 : selectIndex + 1
        );
      }

      if (evnt.key === "Enter") {
        handleClick(selectedItem as SelectedItem);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  const checkStatus = () => {
    if (status === "error") return <p>Something went wrong</p>;
    if (status === "loading") return <p>Loading...</p>;
    if (status === "empty")
      return <p>The character you are looking for was not found.</p>;

    return searchResults?.map((item: Item, index: number) => (
      <SelectItem
        key={item?.id}
        id={item?.id}
        name={item?.name}
        episode={item?.episode?.length as number}
        image={item?.image as string}
        searchTerm={searchTerm}
        setSelectedItem={setSelectedItem}
        selectIndex={selectIndex}
        index={index}
        selectedList={selectedList}
        handleClick={handleClick}
      />
    ));
  };

  return (
    <Wrapper status={status} backward={backward}>
      {checkStatus()}
    </Wrapper>
  );
}

type StyleType = {
  status: "success" | "error" | "loading" | "empty";
  backward: boolean;
};

const Wrapper = styled.div<StyleType>`
  width: 100%;
  border-radius: 13px;
  overflow: scroll;
  border: 1px solid var(--grey-500);
  margin-top: 15px;
  padding: ${({ status }) => (status !== "success" ? "20px" : "0")};

  animation: ${({ backward }) =>
    backward
      ? "forwardShow 0.2s linear forwards"
      : "backwardShow 0.21s linear"};

  @keyframes forwardShow {
    0% {
      max-height: 0px;
    }

    100% {
      max-height: 300px;
    }
  }

  @keyframes backwardShow {
    0% {
      max-height: 300px;
    }

    100% {
      max-height: 0px;
    }
  }
`;
