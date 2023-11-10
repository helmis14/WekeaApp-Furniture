import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import GlobalStyles from '../../../styles/GlobalStyles';
import { FlatList } from 'react-native-gesture-handler';
import { Button, IconButton, List } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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

  checkoutBtnContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },

  checkoutButton: {
    marginHorizontal: 20,
    borderRadius: 10,
  },

  cartTrashButton: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ECECED',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function CartScreen() {
  // Dummy Cart Item
  const DUMMY_CART_ITEMS = [
    {
      id: 1,
      name: 'Lemari',
      price: 10,
      image: 'https://picsum.photos/700',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Meja',
      price: 20,
      image: 'https://picsum.photos/700',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Kursi',
      price: 30,
      image: 'https://picsum.photos/700',
      quantity: 1,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          ...GlobalStyles.largeFont,
          marginVertical: 10,
          marginHorizontal: 20,
        }}
      >
        Cart
      </Text>

      <GestureHandlerRootView>
        <FlatList
          data={DUMMY_CART_ITEMS}
          renderItem={({ item }) => <CartItem item={item} />}
        />
      </GestureHandlerRootView>

      <View style={styles.checkoutBtnContainer}>
        <Button style={styles.checkoutButton} mode="contained">
          Checkout
        </Button>
      </View>
    </View>
  );
}

function CartItem({ item }) {
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
            <IconButton icon="plus" size={14} />
            <Text>{item.quantity}</Text>
            <IconButton icon="minus" size={14} />
          </View>
        );
      }}
    ></List.Item>
  );
}
