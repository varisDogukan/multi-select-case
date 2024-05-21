import styled from "styled-components";
import { Input, Select, SelectedList } from ".";
import React from "react";
import { SelectedItem } from "../types";

export default function MultiSelect() {
  const [selectedList, setSelectedList] = React.useState<SelectedItem[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showSelect, setShowSelect] = React.useState(false);

  return (
    <Wrapper>
      <div className='container'>
        <SelectedList selectedList={selectedList} />
        <Input setSearchTerm={setSearchTerm} setShowSelect={setShowSelect} />
      </div>
      {showSelect && (
        <Select searchTerm={searchTerm} setSelectedList={setSelectedList} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
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
  }
`;
