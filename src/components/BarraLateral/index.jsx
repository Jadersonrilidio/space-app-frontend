import styled from "styled-components";
import ItemNavecacao from "../ItemNavecacao";

const ListaEstilizada = styled.ul`
  width: 212px;
  padding: 0;
  margin: 0;
  list-style: none;
`

const BarraLateral = () => {
  return (
    <nav>
      <ListaEstilizada>
        <ItemNavecacao title="Inicio" icone="home" ativo={true} />
        <ItemNavecacao title="Mais vistas" icone="mais-vistas" />
        <ItemNavecacao title="Mais curtidas" icone="mais-curtidas" />
        <ItemNavecacao title="Novas" icone="novas" />
        <ItemNavecacao title="Surpreenda-me" icone="surpreenda-me" />
      </ListaEstilizada>
    </nav>
  )
}

export default BarraLateral;