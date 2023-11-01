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

import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <SafeAreaView>
      <View>
          <Text>Header</Text>
      </View>
    </SafeAreaView>
  );
}


