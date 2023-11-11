import { View, StyleSheet } from 'react-native';
import React from 'react';
import Animated, { SlideOutLeft } from 'react-native-reanimated';
import { IconButton } from 'react-native-paper';
import CartItem from './CartItem';
import { Swipeable } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  cartTrashButton: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ECECED',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function SwipableCart({
  item,
  setData,
  data,
  index,
  handleDelete,
}) {
  return (
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
}
