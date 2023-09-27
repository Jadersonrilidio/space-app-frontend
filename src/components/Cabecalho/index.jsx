import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 212px;
  }
`;

const Cabecalho = ({ aoFiltrarPorTexto }) => {
  return (
    <HeaderEstilizado>
      <img src="./img/logo.png" alt="Space app logo" />
      <CampoTexto
        placeholder="O que você procura?"
        imageSrc="icons/search.png"
        aoFiltrarPorTexto={aoFiltrarPorTexto}
      />
    </HeaderEstilizado>
  )
}

export default Cabecalho;