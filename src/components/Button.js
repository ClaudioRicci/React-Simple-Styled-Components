import styled from "styled-components";

export default styled.button`
  background-color: ${props => (props.primary ? "#4caf50" : "#008CBA")};
  border: none;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:hover {
    background-color: #ccc;
  }
`;
