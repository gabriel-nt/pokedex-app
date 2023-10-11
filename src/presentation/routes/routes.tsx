import { NavigationContainer } from '@react-navigation/native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Main } from '../screens';

const AppStack = createNativeStackNavigator();

export const Routes = gestureHandlerRootHOC(() => (
  <NavigationContainer>
    <AppStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Main">
      <AppStack.Screen name="Main" component={Main} />
    </AppStack.Navigator>
  </NavigationContainer>
));
