import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';
import AuthStack from './AuthStack';
import BusinessStack from './BusinessStack';
import DeliveryStack from './DeliveryStack';

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated, userType } = useAuth();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <RootStack.Screen name="Auth" component={AuthStack} />
        ) : userType === 'business' ? (
          <RootStack.Screen name="Business" component={BusinessStack} />
        ) : (
          <RootStack.Screen name="Delivery" component={DeliveryStack} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;