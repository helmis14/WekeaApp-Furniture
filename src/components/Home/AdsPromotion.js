import { View, FlatList, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';
import Typography from '../Global/Typography';

const adsAsset = require('../../../assets/ads2.jpg');

const styles = StyleSheet.create({
  pressableComponent: {
    flex: 1,
    height: 100,
    margin: 5,
  },
  imagePressable: {
    width: '100%',
    height: '100%',
    borderRadius: 10,

    borderWidth: 0.4,
    borderColor: 'grey',
  },
});

export default function AdsPromotion() {
  return (
    <View>
      <Typography size="large" weight="bold">
        Promosi Minggu Ini
      </Typography>
      <FlatList
        style={{
          marginTop: 5,
        }}
        on
        numColumns={2}
        data={Array(4)}
        renderItem={() => (
          <Pressable style={styles.pressableComponent}>
            <Image source={adsAsset} style={styles.imagePressable} />
          </Pressable>
        )}
      />
    </View>
  );
}
