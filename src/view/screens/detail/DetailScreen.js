import { ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import CarouselSection from '../../../components/Detail/CarouselSection';
import DescriptionSection from '../../../components/Detail/DescriptionSection';
import LocationSection from '../../../components/Detail/LocationSection';
import PriceSection from '../../../components/Detail/PriceSection';
import RatingSection from '../../../components/Detail/RatingSection';
import ReviewSection from '../../../components/Detail/ReviewSection';
import StickyBottomSection from '../../../components/Detail/StickyBottomSection';
import TitleSection from '../../../components/Detail/TitleSection';
import Container from '../../../components/Global/Container';
import VStack from '../../../components/Global/VStack';
import DUMMY_DATA from '../../../const/data/DUMMY_DATA';

function DetailScreen({ navigation }) {
  return (
    <>
      <ScrollView>
        <CarouselSection navigation={navigation} data={DUMMY_DATA} />
        <Container>
          <VStack gap="10px">
            <TitleSection data={DUMMY_DATA} />
            <RatingSection data={DUMMY_DATA} />
            <PriceSection data={DUMMY_DATA} />
            <Divider />
            <DescriptionSection data={DUMMY_DATA} />
            <LocationSection data={DUMMY_DATA} />
            <ReviewSection data={DUMMY_DATA} />
          </VStack>
        </Container>
      </ScrollView>
      <StickyBottomSection />
    </>
  );
}

export default DetailScreen;
