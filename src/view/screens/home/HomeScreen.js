import { ScrollView } from 'react-native';

import Container from 'components/Global/Container';
import AdsPromotion from 'components/Home/AdsPromotion';
import Category from 'components/Home/Category';
import CustomCarousel from 'components/Home/CustomCarousel';
import Popular from 'components/Home/Popular';
import SearchBar from 'components/Home/SearchBar';

// eslint-disable-next-line no-unused-vars
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
