import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';

import DetailScreen from 'view/screens/detail/DetailScreen';
import MenuScreen from 'view/screens/menu/MenuScreen';
import ProfileScreen from 'view/screens/profile/ProfileScreen';
import HomeTabs from './tabs';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Main" component={HomeTabs} />
          <Stack.Screen name="Details" component={DetailScreen} />
          <Stack.Screen
            name="Profile"
            options={({ navigation }) => ({
              headerShown: true,
              headerTitle: 'Profile',
              headerLeft: () => (
                <IconButton
                  icon="arrow-left"
                  onPress={() => navigation.goBack()}
                />
              ),
            })}
            component={ProfileScreen}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name="Menu"
            options={({ navigation }) => ({
              presentation: 'modal',
              headerShown: true,
              headerTitle: 'Menu',
              headerLeft: () => (
                <IconButton icon="close" onPress={() => navigation.goBack()} />
              ),
            })}
            component={MenuScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
