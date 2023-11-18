import styled from 'styled-components/native';

const VStack = styled.View`
  flex-direction: column;
  gap: ${(props) => (props.gap ? props.gap : '0px')};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.justify && `justify-content: ${props.justify}`};
`;

export default VStack;
