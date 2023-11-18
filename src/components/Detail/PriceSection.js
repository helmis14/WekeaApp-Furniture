import React from 'react';
import styled from 'styled-components/native';
import priceFormater from '../../utils/helpers/priceFormater';
import HStack from '../Global/HStack';
import Typography from '../Global/Typography';
import VStack from '../Global/VStack';

const DiscountWrapper = styled.View`
  background-color: #007bff;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export default function PriceSection({ data }) {
  return (
    <HStack gap="5px" align="center" justify="space-between">
      <VStack>
        {data?.isDiscount && (
          <Typography size="large" color="secondary" lineThrough>
            {priceFormater(data.price)}
          </Typography>
        )}
        <Typography size="xlarge" weight="bold">
          {priceFormater(data?.isDiscount ? data.discountPrice : data.price)}
        </Typography>
      </VStack>
      {data?.isDiscount && (
        <DiscountWrapper>
          <Typography color="white">-{data.discountPercentage}%</Typography>
        </DiscountWrapper>
      )}
    </HStack>
  );
}
