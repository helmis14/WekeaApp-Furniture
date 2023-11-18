import { useState } from 'react';
import { Animated, Dimensions, ScrollView, View } from 'react-native';
import { Card, DataTable, Divider, List } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import { Ionicons } from 'react-native-vector-icons';
import styled from 'styled-components/native';
import Container from '../../../components/Global/Container';
import Typography from '../../../components/Global/Typography';
import priceFormater from '../../../utils/helpers/priceFormatting';

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
      review: 'Lorem ipsum dolor sit amet consectetur',
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

function BulletIndicator({ data, bulletInterpolate }) {
  return (
    <BulletCardWrapper>
      {data?.map((_, index) => (
        <BulletCardItem
          style={{
            opacity: bulletInterpolate[index].opacity,
          }}
        />
      ))}
    </BulletCardWrapper>
  );
}

function DetailScreen({ navigation }) {
  const { width } = Dimensions.get('window');
  const [scrollIndex, setScrollIndex] = useState(0);
  const bulletScrollView = new Animated.Value(0);
  const bulletInterpolate = DUMMY_DATA.images?.map((_, index) => {
    const opacity = bulletScrollView.interpolate({
      inputRange: scrollIndex === index ? [0, 1, 2] : [0, 1, 2],
      outputRange: scrollIndex === index ? [1, 0, 1] : [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });

    return { opacity };
  });

  return (
    <ScrollView>
      <View>
        <BackButton
          name="arrow-back"
          size={30}
          color="#eee"
          onPress={() => navigation.goBack()}
        />
        <Carousel
          loop={false}
          width={width}
          height={400}
          data={DUMMY_DATA.images}
          renderItem={({ item }) => <ImageItem source={item} />}
          onSnapToItem={(index) => setScrollIndex(index)}
        />
        <BulletIndicator
          data={DUMMY_DATA.images}
          bulletInterpolate={bulletInterpolate}
        />
      </View>
      <Container>
        <VStack gap="10px">
          <Typography size="xlarge" weight="title">
            {DUMMY_DATA.name}
          </Typography>

          <HStack gap="15px">
            <Typography color="secondary" size="large">
              {DUMMY_DATA.averageRating}
            </Typography>

            <HStack gap="5px">
              {Array.from({ length: 5 }).map((_, index) => {
                const starColor =
                  index < DUMMY_DATA.averageRating ? '#FFc700' : '#6c757d';

                return <Ionicons name="star" size={20} color={starColor} />;
              })}
            </HStack>
            <Typography color="secondary" size="large" weight="light">
              ({DUMMY_DATA.countReview} reviews)
            </Typography>
          </HStack>

          <HStack gap="5px" align="center" justify="space-between">
            <VStack>
              {DUMMY_DATA?.isDiscount && (
                <Typography size="large" color="secondary" lineThrough>
                  {priceFormater(DUMMY_DATA.price)}
                </Typography>
              )}
              <Typography size="xlarge" weight="bold">
                {priceFormater(
                  DUMMY_DATA?.isDiscount
                    ? DUMMY_DATA.discountPrice
                    : DUMMY_DATA.price
                )}
              </Typography>
            </VStack>
            {DUMMY_DATA?.isDiscount && (
              <DiscountWrapper>
                <Typography color="white">
                  -{DUMMY_DATA.discountPercentage}%
                </Typography>
              </DiscountWrapper>
            )}
          </HStack>

          <Divider />

          <VStack gap="10px">
            <Typography size="large" weight="medium">
              Description & Specification
            </Typography>
            <Typography size="medium" weight="light" color="secondary">
              {DUMMY_DATA.description}
            </Typography>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Typography size="medium" weight="bold" color="secondary">
                    Specification
                  </Typography>
                </DataTable.Title>
              </DataTable.Header>

              {DUMMY_DATA.specifications?.map((item) => (
                <DataTable.Row>
                  <DataTable.Cell>{item?.title}</DataTable.Cell>
                  <DataTable.Cell>{item?.description}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </VStack>

          <VStack gap="5px">
            <Typography size="large" weight="bold">
              Location & Stock
            </Typography>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                paddingVertical: 10,
              }}
            >
              {DUMMY_DATA.locations?.map((item) => (
                <Card
                  style={{
                    width: 200,
                    overflow: 'hidden',
                    marginRight: 10,
                  }}
                >
                  <Card.Cover source={item.image} />
                  <Card.Content
                    style={{
                      padding: 10,
                    }}
                  >
                    <Typography size="large" weight="bold">
                      {item.name}
                    </Typography>
                    <Typography size="medium" weight="light">
                      {item.location}
                    </Typography>
                    <Typography size="medium" weight="light">
                      Stock:&nbsp;{item.stock}
                    </Typography>
                  </Card.Content>
                </Card>
              ))}
            </ScrollView>
          </VStack>

          <VStack gap="5px">
            <HStack justify="space-between" align="center">
              <Typography size="large" weight="bold">
                Ulasan
              </Typography>
            </HStack>

            <List.Section>
              {DUMMY_DATA.reviews?.map((item) => (
                <List.Item
                  style={{
                    borderRadius: 10,
                    padding: 10,
                    marginVertical: 5,
                    borderWidth: 0.4,
                  }}
                  title={item.name}
                  description={item.review}
                  left={() => <List.Image source={{ uri: item.image }} />}
                  right={() => (
                    <HStack gap="5px">
                      {Array.from({ length: 5 }).map((_, index) => {
                        const starColor =
                          index < item.rating ? '#FFc700' : '#6c757d';

                        return (
                          <Ionicons name="star" size={20} color={starColor} />
                        );
                      })}
                    </HStack>
                  )}
                />
              ))}
            </List.Section>
          </VStack>
        </VStack>
      </Container>
    </ScrollView>
  );
}

export default DetailScreen;
