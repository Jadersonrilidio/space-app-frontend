import styled from "styled-components";

const Tag = styled.button`
  padding: 12px;
  display: inline-block;
  margin: 0 12px;
  background: rgba(217, 217, 217, 0.3);
  transition: background-color 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    border-color: #C98CF1;
  }
`

export default Tag;