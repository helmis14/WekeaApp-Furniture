import { View, Image, useWindowDimensions, StyleSheet } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

const styles = StyleSheet.create({
  imageCarousel: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default function CustomCarousel() {
  const { width } = useWindowDimensions();
  const dataCarousel = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww',
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];
  return (
    <View style={{ alignItems: 'center' }}>
      <Carousel
        loop
        width={width - 30}
        height={200}
        autoPlay={false}
        data={dataCarousel}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item }) => (
          <Image
            style={styles.imageCarousel}
            source={{
              uri: item.imageUrl,
            }}
          />
        )}
      />
    </View>
  );
}
