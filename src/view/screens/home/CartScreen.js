import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useMemo } from 'react';
import GlobalStyles from '../../../styles/GlobalStyles';
import { FlatList, Swipeable } from 'react-native-gesture-handler';
import { Button, IconButton, List } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';
import Animated, { SlideOutLeft } from 'react-native-reanimated';

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

  const [data, setData] = useState(DUMMY_CART_ITEMS);

  const totalPrice = useMemo(
    () => data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    [data]
  );

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const renderItem = ({ item, index }) => (
    <Animated.View exiting={SlideOutLeft.duration(1000)}>
      <Swipeable
        renderRightActions={() => (
          <View style={styles.cartTrashButton}>
            <IconButton
              icon="delete"
              size={24}
              onPress={() => handleDelete(item.id)}
            />
          </View>
        )}
      >
        <CartItem item={item} index={index} data={data} setData={setData} />
      </Swipeable>
    </Animated.View>
  );

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
        <FlatList data={data} renderItem={renderItem} />
      </GestureHandlerRootView>

      <View style={styles.checkoutBtnContainer}>
        <Button style={styles.checkoutButton} mode="contained">
          Checkout&nbsp;${totalPrice}
        </Button>
      </View>
    </View>
  );
}

function CartItem({ item, index, data, setData }) {
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
              onPress={() =>
                setData(
                  data.map((prev, i) => {
                    if (i === index) {
                      return {
                        ...prev,
                        quantity: prev.quantity + 1,
                      };
                    }

                    return prev;
                  })
                )
              }
            />
            <Text>{item.quantity}</Text>
            <IconButton
              icon="minus"
              size={14}
              disabled={data[index].quantity === 1}
              onPress={() =>
                setData(
                  data.map((prev, i) => {
                    if (i === index) {
                      return {
                        ...prev,
                        quantity: prev.quantity - 1,
                      };
                    }

                    return prev;
                  })
                )
              }
            />
          </View>
        );
      }}
    ></List.Item>
  );
}
