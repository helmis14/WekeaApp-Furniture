import { View, StyleSheet } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

export default function DiscoverScreen() {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{ position: 'absolute', top: 100, left: 50 }} />
    </View>
  );
}
