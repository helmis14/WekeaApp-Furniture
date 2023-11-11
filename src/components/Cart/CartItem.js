import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { IconButton, List } from 'react-native-paper';
import GlobalStyles from '../../styles/GlobalStyles';

const styles = StyleSheet.create({
  cartItem: {
    marginHorizontal: 20,
    backgroundColor: '#ECECED',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  cartItemLeft: {
    margin: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cartItemImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  cartItemRight: {
    alignItems: 'center',
    margin: 0,
    flexDirection: 'row',
  },
});

function CartItem({ item, index, data, setData }) {
  const quantityHandler = (condition) => {
    setData(
      data.map((prev, i) => {
        if (i === index) {
          return {
            ...prev,
            quantity:
              condition === 'increment' ? prev.quantity + 1 : prev.quantity - 1,
          };
        }

        return prev;
      })
    );
  };

  return (
    <List.Item
      style={styles.cartItem}
      left={() => (
        <View style={styles.cartItemLeft}>
          <Image source={{ uri: item.image }} style={styles.cartItemImg} />
          <View>
            <Text style={GlobalStyles.mediumFont}>{item.name}</Text>
            <Text style={GlobalStyles.regularFont}>{`$ ${item.price}`}</Text>
          </View>
        </View>
      )}
      right={() => {
        return (
          <View style={styles.cartItemRight}>
            <IconButton
              icon="plus"
              size={14}
              onPress={() => quantityHandler('increment')}
            />
            <Text>{item.quantity}</Text>
            <IconButton
              icon="minus"
              size={14}
              disabled={data[index].quantity === 1}
              onPress={() => quantityHandler('decrement')}
            />
          </View>
        );
      }}
    ></List.Item>
  );
}

export default CartItem;
