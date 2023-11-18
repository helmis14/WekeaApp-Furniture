import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
import DetailScreen from 'view/screens/detail/DetailScreen';
import MenuScreen from 'view/screens/menu/MenuScreen';
import HomeTabs from './tabs';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={HomeTabs} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen
          name="Menu"
          options={({ navigation }) => ({
            presentation: 'modal',
            headerShown: true,
            headerTitle: 'Menu Utama',
            headerLeft: () => (
              <IconButton icon="close" onPress={() => navigation.goBack()} />
            ),
          })}
          component={MenuScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
