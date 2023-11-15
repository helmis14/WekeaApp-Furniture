import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

const SimpleButton = styled(Button)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return '#007bff';
      case 'secondary':
        return '#6c757d';
      case 'danger':
        return '#dc3545';
      default:
        return '#007bff';
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '4px 8px';
      case 'md':
        return '6px 12px';
      case 'lg':
        return '8px 16px';
      default:
        return '6px 12px';
    }
  }};
  border-radius: ${(props) => {
    switch (props.round) {
      case 'sm':
        return '4px';
      case 'md':
        return '6px';
      case 'lg':
        return '8px';
      default:
        return '6px';
    }
  }};
  margin-horizontal: 20px;
`;

export default SimpleButton;
