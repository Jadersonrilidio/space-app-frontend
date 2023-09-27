import styled from "styled-components";

const RodapeEstilizado = styled.footer`
  max-width: 100%;
  height: 80px;
  padding: 0 24px;
  margin-top: 74px;
  background: #04244F;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 48px;
  }

  p {
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
  }
`;


const Rodape = () => {
  return (
    <RodapeEstilizado>
      <ul>
        <li><img src="icons/sociais/facebook.svg" alt="facebook icon" /></li>
        <li><img src="icons/sociais/instagram.svg" alt="instagram icon" /></li>
        <li><img src="icons/sociais/twitter.svg" alt="twitter icon" /></li>
      </ul>
      <p>Desenvolvido por Alura</p>
    </RodapeEstilizado>
  )
}

export default Rodape;
