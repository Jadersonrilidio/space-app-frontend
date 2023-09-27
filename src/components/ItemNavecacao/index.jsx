import styled from "styled-components";

const ItemNavegacaoEstilizado = styled.li`
  font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular' };
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 22px;

  &:hover {
    gap: 28px
  }

  img {
    width: 32px;
    height: 32px;
  }

  a {
    color: ${ props => props.$ativo ? "#7B78E5" : "#D9D9D9" };
    text-decoration: none;
  }
`;

const ItemNavecacao = ({ title, icone, ativo = false }) => {
  const imageSrc = ativo ? `icons/${icone}-ativo.png` : `icons/${icone}-inativo.png`;

  return (
    <ItemNavegacaoEstilizado $ativo={ativo}>
      <img src={imageSrc} alt={`${title} icon`} />
      <a href="#">{title}</a>
    </ItemNavegacaoEstilizado>
  )
}

export default ItemNavecacao;
