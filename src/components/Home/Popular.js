import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import CardProduct from '../Global/CardProduct';

export default function Popular() {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        Popular
      </Text>
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
