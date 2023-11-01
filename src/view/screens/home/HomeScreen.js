import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import SearchBar from '../../../components/Home/SearchBar';
import CustomCarousel from '../../../components/Home/CustomCarousel';
import Category from '../../../components/Home/Category';
import AdsPromotion from '../../../components/Home/AdsPromotion';
import Popular from '../../../components/Home/Popular';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <SearchBar />
        <CustomCarousel />
        <Category />
        <AdsPromotion />
        <Popular />
      </View>

      <View
        style={{
          marginTop: '15%',
        }}
      />
    </ScrollView>
  );
}
