import { View, Linking, Platform } from 'react-native';
import React from 'react';
import { Card, IconButton } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import Typography from '../Global/Typography';

export default function CardDiscover({ item }) {
  return (
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
          <Typography weight="bold" size="large">
            {item.title}
          </Typography>
          <Typography weight="normal" size="medium">
            {item.address}
          </Typography>
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
  );
}
