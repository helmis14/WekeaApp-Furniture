import { Animated, Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Ionicons } from "react-native-vector-icons";
import styled from "styled-components/native";

const DUMMY_DATA = {
  _id: '64be9083e5793f47e99454ae',
  name: 'Lorem ipsum dolor sit amet consectetur adipisicing',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  price: 100000,
  isDiscount: true,
  discountPercentage: 10,
  discountPrice: 90000,
  categoryId: '64be8a3516b11f521669b279',
  thumbnail: 'SementaraLangsungDi.png',
  images: [
    require('../../../../assets/furniture.jpeg'),
    require('../../../../assets/furniture.jpeg'),
    require('../../../../assets/furniture.jpeg'),
  ],
  averageRating: 3,
  countReview: 2,
  reviews: [
    {
      id: 1,
      name: 'John',
      image: 'https://i.pravatar.cc/150?img=68',
      rating: 4,
      review: 'Ok',
    },
    {
      id: 2,
      name: 'Doe',
      image: 'https://i.pravatar.cc/150?img=68',
      rating: 2,
      review: 'Ok aja',
    },
  ],
  specifications: [
    {
      title: 'Procesor',
      description: 'Intel 7',
    },
    {
      title: 'Ram',
      description: '4 Gb',
    },
  ],
  locations: [
    {
      name: 'Toko 1',
      location: 'Jl. Jalan',
      stock: 10,
      image: require('../../../../assets/furniture.jpeg'),
    },
    {
      name: 'Toko 2',
      location: 'Jl. Jalan',
      stock: 15,
      image: require('../../../../assets/furniture.jpeg'),
    },
    {
      name: 'Toko 3',
      location: 'Jl. Jalan',
      stock: 20,
      image: require('../../../../assets/furniture.jpeg'),
    },
  ],
  sold: 20,
};

// Video 40
const BulletCardWrapper = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  z-index: 100;
  align-self: center;
  margin-bottom: 20px;
`;

const BulletCardItem = styled(Animated.View)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #eee;
  margin-horizontal: 5px;
`;

const ImageItem = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

const BackButton = styled(Ionicons)`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
`;

// Video 43
const HStack = styled.View`
  flex-direction: row;
  gap: ${(props) => (props.gap ? props.gap : '0px')};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.justify && `justify-content: ${props.justify}`};
`;

const VStack = styled.View`
  flex-direction: column;
  gap: ${(props) => (props.gap ? props.gap : '0px')};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.justify && `justify-content: ${props.justify}`};
`;

const DiscountWrapper = styled.View`
  background-color: #007bff;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;


// Video 47
const StickyBottom = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 6px;
  background-color: #fff;
  border-top: 0.2px solid #eee;
`;

const CheckoutButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-horizontal: 10px;
  flex: 1;
`;

function DetailScreen({ navigation }) {

  const {width} = Dimensions.get("window")
  return (
    <View>
      <BackButton name="arrow-back" size={30} color="#eee" onPress={() => navigation.goBack()} />
      <Carousel loop={false} width={width} height={400} data={DUMMY_DATA.images} renderItem={({ item }) => {
      return <ImageItem source={item} />
    }} />
    </View>
  );
}

export default DetailScreen;
