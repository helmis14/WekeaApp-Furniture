import { View, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';
import SwipableCart from '../../../components/Cart/SwipableCart';
import Container from '../../../components/Global/Container';
import Typography from '../../../components/Global/Typography';
import SimpleButton from '../../../components/Global/SimpleButton';

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
    <SwipableCart
      data={data}
      setData={setData}
      item={item}
      index={index}
      handleDelete={handleDelete}
    />
  );

  return (
    <Container>
      <Typography size="large" weight="bold">
        Cart
      </Typography>

      <GestureHandlerRootView>
        <FlatList data={data} renderItem={renderItem} />
      </GestureHandlerRootView>

      <View style={styles.checkoutBtnContainer}>
        <SimpleButton
          variant="primary"
          size="sm"
          round="lg"
          style={{ marginBottom: 5 }}
        >
          <Typography size="normal" color="white" weight="bold">
            Checkout&nbsp;
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(totalPrice)}
          </Typography>
        </SimpleButton>
      </View>
    </Container>
  );
}
