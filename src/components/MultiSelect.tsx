import styled from "styled-components";
import { Input, Select, SelectedList } from ".";
import React from "react";
import { SelectedItem } from "../types";

const selectedOb = [
  {
    id: 1,
    name: "Morty Smith",
  },
  {
    id: 2,
    name: "Cool Rick",
  },
];

export default function MultiSelect() {
  const [selectedList, setSelectedList] =
    React.useState<SelectedItem[]>(selectedOb);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(null);

  return (
    <Wrapper>
      <SelectedList selectedList={selectedList} />
      <Select />
      <Input />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  height: auto;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 10px 5px 5px;
  border-radius: 13px;
  border: 1px solid var(--grey-700);
`;
