import { View, StyleSheet } from 'react-native';
import React from 'react';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import TransactionContainer from '../../../components/Transaction/TransactionContainer';
import SearchBar from '../../../components/Home/SearchBar';

const data = [
  {
    id: 1,
    date: '12/12/2021',
    status: 'Sedang dikirim',
    items: [
      {
        id: 1,
        name: 'Meja',
        qty: 1,
        price: 100,
        image: 'https://picsum.photos/700',
      },
    ],
  },
  {
    id: 2,
    date: '12/12/2021',
    status: 'Sedang dikirim',
    items: [
      {
        id: 1,
        name: 'Lemari',
        qty: 1,
        price: 100,
        image: 'https://picsum.photos/700',
      },
    ],
  },
  {
    id: 3,
    date: '12/12/2021',
    status: 'Sedang dikirim',
    items: [
      {
        id: 1,
        name: 'TV',
        qty: 1,
        price: 100,
        image: 'https://picsum.photos/700',
      },
      {
        id: 2,
        name: 'Kipas Angin',
        qty: 1,
        price: 100,
        image: 'https://picsum.photos/700',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchbar: {
    backgroundColor: 'white',
  },
});

export default function TransactionScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />

      <GestureHandlerRootView>
        <FlatList
          style={{ marginTop: 20 }}
          data={data}
          renderItem={({ item }) => <TransactionContainer data={item} />}
        />
      </GestureHandlerRootView>
    </View>
  );
}
