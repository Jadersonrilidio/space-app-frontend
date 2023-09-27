import styled from "styled-components";
import tagsList from "../../../assets/tags.json";
import Tag from "./Tag";

const TagsTitle = styled.p`
  width: 219px;
  margin: 0;
  display: inline-block;
  color: #D9D9D9;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
`

const Tags = ({ aoFiltrarPorTag }) => {

  const aoClickar = (tagId) => {
    aoFiltrarPorTag(tagId);
  }

  return (
    <section>
      <TagsTitle>Busque por tags:</TagsTitle>
      {tagsList.map(tag =>
        <Tag key={tag.id} onClick={() => aoClickar(tag.id)}>
          {tag.titulo}
        </Tag>
      )}
    </section>
  )
}

export default Tags;
