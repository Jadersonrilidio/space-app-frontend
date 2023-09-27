import styled from "styled-components";
import ImagemZoom from "./ImagemZoom";

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: fixed;
  top: 50px;
  background: transparent;
  padding: 0;
  border: 0;
  max-width: 1156px;
  max-height: 740px;
  display: flex;
`;

const FormEstilizado = styled.form`
  height: 30px;
  position: relative;
  top: 20px;
  right: 50px;

  button {
    cursor: pointer;
    background: transparent;
    border: none;

    img {
      width: 22px;
      height: 22px;
    }
  }
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto &&
        <>
          <Overlay />
          <DialogEstilizado open={!!foto}>
            <ImagemZoom foto={foto} aoAlternarFavorito={aoAlternarFavorito} />

            <FormEstilizado method="dialog">
              <button onClick={aoFechar}>
                <img src="icons/fechar.png" alt="icone fechar" />
              </button>
            </FormEstilizado>
          </DialogEstilizado>
        </>
      }
    </>
  )
}

export default ModalZoom;
