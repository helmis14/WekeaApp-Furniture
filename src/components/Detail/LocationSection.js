import React from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Typography from '../Global/Typography';
import VStack from '../Global/VStack';

export default function LocationSection({ data }) {
  return (
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
        {data.locations?.map((item) => (
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
  );
}
