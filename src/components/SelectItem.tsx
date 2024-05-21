import styled from "styled-components";
import useTemplateName from "../hooks/useTemplateName";

type SelectItemProps = {
  id: number;
  name: string;
  episode: number;
  image: string;
  searchTerm: string;
};

export default function SelectItem({
  episode,
  id,
  name,
  image,
  searchTerm,
}: SelectItemProps) {
  const nameTemplate = useTemplateName(searchTerm, name);

  return (
    <Wrapper htmlFor={name}>
      <input type='checkbox' id={name} />
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

const Wrapper = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  background-color: var(--grey-100);
  padding: 10px;
  cursor: pointer;

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
