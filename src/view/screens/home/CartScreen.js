import SwipableCart from 'components/Cart/SwipableCart';
import Container from 'components/Global/Container';
import SimpleButton from 'components/Global/SimpleButton';
import Typography from 'components/Global/Typography';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import priceFormater from 'utils/helpers/priceFormater';

const styles = StyleSheet.create({
  checkoutBtnContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
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
    [data],
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
            {priceFormater(totalPrice)}
          </Typography>
        </SimpleButton>
      </View>
    </Container>
  );
}
