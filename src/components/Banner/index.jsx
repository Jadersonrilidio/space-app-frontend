import styled from "styled-components";

const FigureEstilizada = styled.figure`
  max-width: 100%;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  background-image: ${ props => `url(${props.$backgroundImg})` };
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-grow: 1;

  h1 {
    max-width: 300px;
    padding: 0 64px;
    color: #D9D9D9;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
  }
`;

const Banner = ({ texto, backgroundImg }) => {
  return (
    <FigureEstilizada $backgroundImg={backgroundImg}>
      <h1>
        {texto}
      </h1>
    </FigureEstilizada>
  )
}

export default Banner;