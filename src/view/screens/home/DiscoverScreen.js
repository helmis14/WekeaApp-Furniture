import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  Linking,
  Platform,
  Animated,
} from 'react-native';
import React, { useRef } from 'react';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';
import { Card, IconButton, Text } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';

const storeMarker = require('../../../../assets/store.png');

export default function DiscoverScreen() {
  const { width } = useWindowDimensions();

  const mapRef = useRef(null);
  const scrollCarouselRef = useRef(null);
  const mapAnimation = new Animated.Value(0);

  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markers = [
    {
      coordinate: { latitude: 37.8025259, longitude: -122.4351431 },
      title: 'Wekea Drop Store',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      coordinate: {
        latitude: 37.7896386,
        longitude: -122.421646,
      },
      title: 'Wekea Drop Store 2',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      coordinate: { latitude: 37.7665248, longitude: -122.4161628 },
      title: 'Wekea Drop Store 3',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  const onPressMarker = (mapData) => {
    const markerId = mapData._targetInst.return.key;

    scrollCarouselRef.current.scrollTo({
      index: +markerId,
      animated: true,
    });
  };

  const interpolations = markers.map((_, index) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });

    return { scale };
  });

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        ref={mapRef}
        initialRegion={region}
        style={StyleSheet.absoluteFillObject}
      >
        {/* <Polyline
          coordinates={[
            { latitude: 37.8025259, longitude: -122.4351431 },
            { latitude: 37.7896386, longitude: -122.421646 },
            { latitude: 37.7665248, longitude: -122.4161628 },
            { latitude: 37.7734153, longitude: -122.4577787 },
            { latitude: 37.7948605, longitude: -122.4596065 },
            { latitude: 37.8025259, longitude: -122.4351431 },
          ]}
          strokeColors={['#000', '#f00', '#f0f']}
          strokeWidth={1}
        /> */}
        {/* <Polygon
          coordinates={[
            { latitude: 37.8025259, longitude: -122.4351431 },
            { latitude: 37.7896386, longitude: -122.421646 },
            { latitude: 37.7665248, longitude: -122.4161628 },
            { latitude: 37.7734153, longitude: -122.4577787 },
            { latitude: 37.7948605, longitude: -122.4596065 },
            { latitude: 37.8025259, longitude: -122.4351431 },
          ]}
          strokeWidth={1}
          fillColor="#00f"
        /> */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            onPress={(e) => onPressMarker(e)}
          >
            <Animated.Image
              source={storeMarker}
              style={{
                transform: [
                  {
                    scale: interpolations[index].scale,
                  },
                ],
              }}
            />
          </Marker>
        ))}
      </MapView>

      <View style={{ alignItems: 'center' }}>
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
          renderItem={({ item }) => (
            <Card
              style={{
                overflow: 'hidden',
              }}
            >
              <Card.Cover
                source={{ uri: item.image }}
                style={{
                  height: 150,
                  borderRadius: 0,
                }}
              />
              <Card.Content
                style={{
                  padding: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text>{item.address}</Text>
                </View>
                <IconButton
                  mode="outlined"
                  onPress={() =>
                    Linking.openURL(
                      Platform.OS === 'ios'
                        ? `maps://app?daddr=${item.coordinate.latitude},${item.coordinate.longitude}`
                        : `google.navigation:q=${item.coordinate.latitude},${item.coordinate.longitude}`
                    )
                  }
                  icon={() => <Ionicons size={24} name="locate" />}
                />
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </View>
  );
}