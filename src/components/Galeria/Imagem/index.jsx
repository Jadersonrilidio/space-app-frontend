import styled from "styled-components";

const FigureEstilizada = styled.figure`
  margin: 0;
  width: 448px;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  & > img {
    border-radius: 20px 20px 0 0;
    max-width: 100%;
    height: 256px;
  }

  figcaption {
    padding: 12px;
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    width: 100%;
    color: white;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  
    footer {
      display: block;
  
      h3 {
        font-family: 'GandhiSansBold';
        margin: 12px 0 0;
        vertical-align: bottom;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
      }
      p {
        flex-grow: 1;
        margin: 0 0 12px;
        vertical-align: top;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
      }
    }

    div {
      align-self: end;

      button {
        background: transparent;
        border: none;
        margin: 0 10px;
        cursor: pointer;

        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

const Imagem = ({ foto, aoExpandirFoto, aoAlternarFavorito }) => {
  return (
    <FigureEstilizada>
      <img src={foto.path} alt={foto.titulo} />

      <figcaption>
        <footer>
          <h3>{foto.titulo}</h3>
          <p>{foto.fonte}</p>
        </footer>

        <div>
          <button>
            <img
              src={foto.favorito ? "icons/favorito-ativo.png" : "icons/favorito.png"}
              alt="Favorito"
              onClick={() => aoAlternarFavorito(foto)}
            />
          </button>

          <button>
            <img
              src="icons/expandir.png"
              alt="Expandir"
              onClick={() => aoExpandirFoto(foto)}
            />
          </button>
        </div>
      </figcaption>
    </FigureEstilizada>
  )
}

export default Imagem;
