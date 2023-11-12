import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { Divider, Searchbar } from 'react-native-paper';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';

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
    marginHorizontal: 20,
    marginVertical: 20,
  },
  searchbar: {
    backgroundColor: 'white',
  },

  transactionContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    gap: 16,
  },

  transactionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  transactionDate: {
    fontWeight: '400',
    fontSize: 12,
    marginRight: 10,
  },

  transactionStatus: {
    padding: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'orange',
  },

  transactionStatusText: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 12,
  },

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

  transactionFooter: {
    alignItems: 'flex-end',
    gap: 5,
  },

  transactionFooterButton: {
    padding: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default function TransactionScreen() {
  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchbar}
        placeholder="Mau cari apa?"
        theme={{
          roundness: 2,
        }}
      />

      <GestureHandlerRootView>
        <FlatList
          style={{ marginTop: 20 }}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.transactionContainer}>
              <View style={styles.transactionHeader}>
                <Text style={styles.transactionDate}>{item.date}</Text>
                <View style={styles.transactionStatus}>
                  <Text style={styles.transactionStatusText}>
                    {item.status}
                  </Text>
                </View>
              </View>

              {item?.items?.map((i) => (
                <View style={styles.transactionBody}>
                  <View style={styles.transactionBodyLeft}>
                    <Image
                      source={{ uri: i.image }}
                      style={styles.transactionBodyImage}
                    />
                    <View style={styles.transactionBodyText}>
                      <Text style={styles.transactionBodyTextTitle}>
                        {i.name}
                      </Text>

                      <Text style={styles.transactionBodyTextDesc}>
                        Qty : {i.qty}
                      </Text>
                    </View>
                  </View>
                  <Text>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    }).format(i.price)}
                  </Text>
                </View>
              ))}
              <Divider />
              <View style={styles.transactionFooter}>
                <Pressable>
                  <View style={styles.transactionFooterButton}>
                    <Text>Lacak</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          )}
        />
      </GestureHandlerRootView>
    </View>
  );
}
