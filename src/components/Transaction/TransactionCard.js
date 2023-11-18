import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import priceFormater from '../../utils/helpers/priceFormater';
import Typography from '../Global/Typography';

const styles = StyleSheet.create({
  transactionBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  transactionBodyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  transactionBodyImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  transactionBodyText: {
    marginLeft: 10,
    gap: 5,
  },

  transactionBodyTextTitle: {
    fontWeight: 'bold',
  },

  transactionBodyTextDesc: {
    fontWeight: '400',
  },
});

export default function TransactionCard({ item }) {
  return (
    <View style={styles.transactionBody}>
      <View style={styles.transactionBodyLeft}>
        <Image
          source={{ uri: item.image }}
          style={styles.transactionBodyImage}
        />
        <View style={styles.transactionBodyText}>
          <Typography weight="bold" size="medium">
            {item.name}
          </Typography>
          <Typography weight="normal" size="small">
            {item.qty} Barang
          </Typography>
        </View>
      </View>
      <Typography weight="bold" size="medium">
        {priceFormater(item.price)}
      </Typography>
    </View>
  );
}
