import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import fotosGaleriaList from "./assets/fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Rodape from "./components/Rodape";

const FundoGradiente = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const AsideContainer = styled.aside`
  /* CSS styles here */
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 32px;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotosGaleriaList);
  const [fotosGaleriaExibidas, setFotosGaleriaExibidas] = useState(fotosGaleria);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [filtro, setFiltro] = useState('');
  const [tag, setTag] = useState(0);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({ ...fotoSelecionada, favorito: !fotoSelecionada.favorito });
    }

    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return (fotoGaleria.id === foto.id)
        ? { ...fotoGaleria, favorito: !fotoGaleria.favorito }
        : fotoGaleria;
    }));

    setFotosGaleriaExibidas(fotosGaleriaExibidas.map(fotoGaleria => {
      return (fotoGaleria.id === foto.id)
        ? { ...fotoGaleria, favorito: !fotoGaleria.favorito }
        : fotoGaleria;
    }));
  }

  useEffect(() => {
    setFotosGaleriaExibidas(fotosGaleria.filter(foto =>
      (tag === 0 || foto.tagId === tag)
      && (filtro === '' || foto.titulo.toLowerCase().includes(filtro.toLowerCase()))
    ));
  }, [filtro, tag]);

  return (
    <FundoGradiente>
      <EstilosGlobais />

      <AppContainer>
        <Cabecalho aoFiltrarPorTexto={setFiltro} />

        <MainContainer>
          <AsideContainer>
            <BarraLateral />
          </AsideContainer>

          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImg="img/banner.png"
            />
            <Galeria
              fotos={fotosGaleriaExibidas}
              aoSelecionarFoto={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              aoFiltrarPorTag={setTag}
            />
          </ConteudoGaleria>
        </MainContainer>

        <ModalZoom
          foto={fotoSelecionada}
          aoFechar={() => setFotoSelecionada(null)}
          aoAlternarFavorito={aoAlternarFavorito}
        />
      </AppContainer>

      <Rodape />
    </FundoGradiente>
  )
}

export default App;
