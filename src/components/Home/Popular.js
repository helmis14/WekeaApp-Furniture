import { View, ScrollView } from 'react-native';
import React from 'react';
import CardProduct from '../Global/CardProduct';
import Typography from '../Global/Typography';

export default function Popular() {
  return (
    <View>
      <Typography size="large" weight="bold">
        Popular
      </Typography>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 10,
        }}
      >
        {Array.from(Array(4)).map(() => (
          <CardProduct />
        ))}
      </ScrollView>
    </View>
  );
}
