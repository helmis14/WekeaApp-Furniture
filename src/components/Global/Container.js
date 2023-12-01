import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 10px;
  gap: 15px;
  padding-bottom: 20%;
  ${(props) => props.bgColor && `background-color: ${props.bgColor}`};
  ${(props) => props.color && `color: ${props.color}`};
`;
export default Container;
