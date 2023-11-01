import React from 'react';
import { Button, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>HomeScreen</Text>
      <Button
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 50,
          })
        }
        title="Pergi ke halaman detail"
      />
    </View>
  );
}

export default HomeScreen;
