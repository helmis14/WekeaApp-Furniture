import { View, StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
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
  const itemHeight = useSharedValue(100);

  const rCartContainerStyle = useAnimatedStyle(() => ({
    height: itemHeight.value,
  }));

  return (
    <Animated.View style={rCartContainerStyle}>
      <Swipeable
        onSwipeableOpen={() => {
          itemHeight.value = withTiming(0);
          setTimeout(() => {
            handleDelete(item.id);
          }, 300);
        }}
        renderRightActions={() => (
          <View style={styles.cartTrashButton}>
            <IconButton icon="delete" size={24} />
          </View>
        )}
      >
        <CartItem item={item} index={index} data={data} setData={setData} />
      </Swipeable>
    </Animated.View>
  );
}
