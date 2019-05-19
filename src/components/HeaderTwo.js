import styled from "styled-components";

export default styled.h2`
  font-family: ${props => (props.font ? props.font : props.theme.font)};
`;
