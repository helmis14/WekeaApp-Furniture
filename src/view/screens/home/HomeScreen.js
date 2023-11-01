import React from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        gap: 20,
        margin: 20,
      }}
    >
      <Text>HomeScreen</Text>
      <TextInput label="Email" />
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 50,
          })
        }
      >
        Button Paper
      </Button>
    </View>
  );
}

export default HomeScreen;
