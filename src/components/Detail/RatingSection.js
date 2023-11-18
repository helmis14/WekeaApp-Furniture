import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import HStack from '../Global/HStack';
import Typography from '../Global/Typography';

export default function RatingSection({ data }) {
  return (
    <HStack gap="15px">
      <Typography color="secondary" size="large">
        {data.averageRating}
      </Typography>

      <HStack gap="5px">
        {Array.from({ length: 5 }).map((_, index) => {
          const starColor = index < data.averageRating ? '#FFc700' : '#6c757d';

          return <Ionicons name="star" size={20} color={starColor} />;
        })}
      </HStack>
      <Typography color="secondary" size="large" weight="light">
        ({data.countReview} reviews)
      </Typography>
    </HStack>
  );
}
