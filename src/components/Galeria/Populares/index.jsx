import styled from "styled-components";
import Titulo from "../../Titulo";
import fotosPopulares from "../../../assets/populares.json";

const ContainerPopulares = styled.div`
  width: 212px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListaEstilizada = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;

  li img {
    width: 212px;
    height: 158px;
    border-radius: 20px;
  }

  button {
    width: 208px;
    line-height: 56px;
    box-sizing: border-box;
    border: 2px solid #7B78E5;
    border-radius: 10px;
    background: transparent;
    font-family: 'GandhiSansBold';
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;
  }
`;

const Populares = () => {
  return (
    <ContainerPopulares>
      <Titulo $alinhamento="center">Populares</Titulo>

      <ListaEstilizada>
        {fotosPopulares.map(foto =>
          <li key={foto.id}>
            <img src={foto.path} alt={foto.path} />
          </li>
        )}

        <button>Ver mais</button>
      </ListaEstilizada>
    </ContainerPopulares>
  )
}

export default Populares;