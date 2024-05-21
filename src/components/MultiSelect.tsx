import React from "react";
import styled from "styled-components";
import { Select, SelectedList } from ".";
import { SelectedItem } from "../types";
import useOutsideClick from "../hooks/useOutsideClick";

export default function MultiSelect() {
  const [selectedList, setSelectedList] = React.useState<SelectedItem[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showSelect, setShowSelect] = React.useState(false);
  const [backward, setBackWard] = React.useState(false);
  const multiSelectRef = React.useRef(null);

  useOutsideClick({
    ref: multiSelectRef,
    callback: () => {
      setBackWard(false);

      setTimeout(() => {
        setShowSelect(false);
      }, 200);
    },
  });

  const handleClick = (selectedItem: SelectedItem) => {
    if (selectedList.find((item) => item.id === selectedItem.id)) {
      setSelectedList(
        selectedList.filter((item) => item.id !== selectedItem.id)
      );
    } else {
      setSelectedList([
        ...selectedList,
        { id: selectedItem.id, name: selectedItem.name },
      ]);
    }
  };

  return (
    <Wrapper ref={multiSelectRef}>
      <SelectedList
        selectedList={selectedList}
        setSearchTerm={setSearchTerm}
        setShowSelect={setShowSelect}
        handleClick={handleClick}
        showSelect={showSelect}
        setBackWard={setBackWard}
      />

      {showSelect && (
        <Select
          searchTerm={searchTerm}
          selectedList={selectedList}
          handleClick={handleClick}
          backward={backward}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: 20px;
`;
