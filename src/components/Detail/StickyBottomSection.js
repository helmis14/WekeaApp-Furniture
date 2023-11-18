import React from 'react';
import { IconButton } from 'react-native-paper';
import styled from 'styled-components/native';
import HStack from '../Global/HStack';
import Typography from '../Global/Typography';

const StickyBottom = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 6px;
  background-color: #fff;
  border-top: 0.2px solid #eee;
`;

const CheckoutButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-horizontal: 10px;
  flex: 1;
`;

export default function StickyBottomSection() {
  return (
    <StickyBottom>
      <HStack gap="10px" align="center" justify="space-between">
        <IconButton icon="cart" iconColor="#6c7576" size={25} />
        <CheckoutButton>
          <Typography color="white" weight="bold">
            Beli
          </Typography>
        </CheckoutButton>
      </HStack>
    </StickyBottom>
  );
}
