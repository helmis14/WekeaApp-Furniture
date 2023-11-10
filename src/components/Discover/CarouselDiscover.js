import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import CardDiscover from './CardDiscover';

export default function CarouselDiscover({
  scrollCarouselRef,
  mapRef,
  markers,
  width,
  mapAnimation,
  region,
}) {
  return (
    <Carousel
      ref={scrollCarouselRef}
      loop
      style={{
        top: 20,
      }}
      width={width - 30}
      height={250}
      autoPlay={false}
      data={markers}
      onProgressChange={(progress) => {
        mapAnimation.setValue(Math.abs(progress));
      }}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => {
        const { coordinate } = markers[index];

        mapRef.current.animateToRegion({
          ...coordinate,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        });
      }}
      renderItem={({ item }) => <CardDiscover item={item} />}
    />
  );
}
