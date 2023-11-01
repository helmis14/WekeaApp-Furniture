// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello Helmi!s</Text>
//       <StatusBar style="auto" />
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f00',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { View, Text } from 'react-native';
import React from 'react';
import CustomSafeArea from './src/components/CustomSafeArea';

export default function App() {
  return (
    <CustomSafeArea>
      <View
        style={{
          backgroundColor: '#F24C3D',
          padding: 20,
        }}
      >
        <Text
          style={{
            color: '#FFF',
          }}
        >
          Header
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#22A699',
          padding: 20,
          flex: 5,
        }}
      >
        <Text
          style={{
            color: '#FFF',
          }}
        >
          Content
        </Text>
      </View>
    </CustomSafeArea>
  );
}
