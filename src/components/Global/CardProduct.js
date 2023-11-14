import { StyleSheet } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import Typography from './Typography';

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    overflow: 'hidden',
    marginRight: 15,
  },
  cardCoverImg: {
    borderRadius: 0,
    height: 150,
  },
  cardTextLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});

const furnitureJpg = require('../../../assets/furniture.jpeg');

export default function CardProduct() {
  return (
    <Card style={styles.cardContainer}>
      <Card.Cover style={styles.cardCoverImg} source={furnitureJpg} />
      <Card.Content
        style={{
          padding: 10,
        }}
      >
        <Typography size="medium" weight="bold">
          Furniture
        </Typography>
        <Typography size="small" weight="medium">
          Rp. 1000.000
        </Typography>
      </Card.Content>
    </Card>
  );
}
