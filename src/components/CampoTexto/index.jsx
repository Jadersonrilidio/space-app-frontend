import styled from "styled-components";

const CampoTextoEstilizado = styled.div`
  width: 602px;
  height: 56px;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 598px;
    height: 52px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 12px 16px;
    background: linear-gradient(174.61deg, #041833 4.8%, #04244F 98%);
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      max-width: 550px;
      background: transparent;
      border: none;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      color: #D9D9D9;
      &::placeholder {
        color: #D9D9D9;
      }
    }

    button {
      background: transparent;
      border: none;
      img {
        width: 32px;
        height: 32px;
        cursor: pointer;
      }
    }
  }
`;

const CampoTexto = ({ placeholder, imageSrc, aoFiltrarPorTexto }) => {
  const aoSubmeter = (event) => {
    event.preventDefault();
    aoFiltrarPorTexto(event.target.elements[0].value);
  }

  return (
    <CampoTextoEstilizado>
      <form onSubmit={event => aoSubmeter(event)}>
        <input type="text" placeholder={placeholder} />
        <button>
          <img src={imageSrc} alt="icon" />
        </button>
      </form>
    </CampoTextoEstilizado>
  )
}

export default CampoTexto;
