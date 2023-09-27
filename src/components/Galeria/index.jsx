import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`;

const Galeria = ({ fotos = [], aoSelecionarFoto, aoAlternarFavorito, aoFiltrarPorTag }) => {
  return (
    <>
      <Tags aoFiltrarPorTag={aoFiltrarPorTag} />

      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ul>
            {fotos.map(foto =>
              <li key={foto.id}>
                <Imagem
                  foto={foto}
                  aoExpandirFoto={aoSelecionarFoto}
                  aoAlternarFavorito={aoAlternarFavorito}
                />
              </li>
            )}
          </ul>
        </SecaoFluida>

        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria;
