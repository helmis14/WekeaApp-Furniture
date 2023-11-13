import React from 'react';
import { ScrollView } from 'react-native';

import SearchBar from '../../../components/Home/SearchBar';
import CustomCarousel from '../../../components/Home/CustomCarousel';
import Category from '../../../components/Home/Category';
import AdsPromotion from '../../../components/Home/AdsPromotion';
import Popular from '../../../components/Home/Popular';
import Container from '../../../components/Global/Container';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <Container>
        <SearchBar isHashButton />
        <CustomCarousel />
        <Category />
        <AdsPromotion />
        <Popular />
      </Container>
    </ScrollView>
  );
}
