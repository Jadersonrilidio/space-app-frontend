import styled from "styled-components";

const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: #7B78E6;
  text-align: ${ props => props.$alinhamento ?? 'left' };
`

export default Titulo;
