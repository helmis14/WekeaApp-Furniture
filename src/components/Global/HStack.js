import styled from 'styled-components/native';

const HStack = styled.View`
  flex-direction: row;
  gap: ${(props) => (props.gap ? props.gap : '0px')};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.justify && `justify-content: ${props.justify}`};
`;

export default HStack;
