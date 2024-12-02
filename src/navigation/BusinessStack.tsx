import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BusinessHomeScreen from '../screens/BusinessScreens/BusinessHomeScreen';

const Stack = createNativeStackNavigator();

const BusinessStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="BusinessHome" 
      component={BusinessHomeScreen} 
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default BusinessStack;