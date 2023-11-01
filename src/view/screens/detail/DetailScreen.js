import { View, Text, Button } from 'react-native';
import React from 'react';

function DetailScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Detail Screen</Text>
      <Button onPress={() => navigation.goBack()} title="kembali" />
    </View>
  );
}

export default DetailScreen;
