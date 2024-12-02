import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeliveryHomeScreen from '../screens/DeliveryScreens/DeliveryHomeScreens';

const Stack = createNativeStackNavigator();

const DeliveryStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="DeliveryHome" 
      component={DeliveryHomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default DeliveryStack;