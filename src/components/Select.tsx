import styled from "styled-components";
import useFetchAPI from "../hooks/useFetchAPI";
import { SelectedItem } from "../types";
import SelectItem from "./SelectItem";
import React from "react";

const ENDPOINT = "https://rickandmortyapi.com/api/character";

type SelectProps = {
  searchTerm: string;
  setSelectedList: React.Dispatch<React.SetStateAction<SelectedItem[]>>;
};

export default function Select({ searchTerm }: SelectProps) {
  const { searchResults, status } = useFetchAPI(ENDPOINT, searchTerm);
  const [selectIndex, setSelectIndex] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

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
        console.log("enter'a basıldı");
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

    return searchResults?.map((item: any) => (
      <SelectItem
        key={item?.id}
        id={item?.id}
        name={item?.name}
        episode={item?.episode?.length}
        image={item?.image}
        searchTerm={searchTerm}
      />
    ));
  };

  return <Wrapper>{checkStatus()}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 50px;
  max-height: 300px;
  border-radius: 13px;
  overflow: scroll;
  border: 1px solid var(--grey-500);
`;
