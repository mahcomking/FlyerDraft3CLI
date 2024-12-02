import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

const SignInScreen = ({ navigation }: any) => {
  // Authentication context
  const { login } = useAuth();

  // State management
  const [userType, setUserType] = useState<'business' | 'delivery'>('business');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle sign in logic
  const handleSignIn = () => {
    if (email && password) {
      login(userType);
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      
      {/* User Type Selection */}
      <View style={styles.userTypeContainer}>
        <TouchableOpacity 
          style={[styles.typeButton, userType === 'business' && styles.selectedType]} 
          onPress={() => setUserType('business')}
        >
          <Text style={[
            styles.typeText, 
            userType === 'business' && styles.selectedTypeText
          ]}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.typeButton, userType === 'delivery' && styles.selectedType]}
          onPress={() => setUserType('delivery')}
        >
          <Text style={[
            styles.typeText, 
            userType === 'delivery' && styles.selectedTypeText
          ]}>Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  typeButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    width: '40%',
  },
  selectedType: {
    backgroundColor: '#007AFF',
  },
  typeText: {
    textAlign: 'center',
    color: '#007AFF',
  },
  selectedTypeText: {
    color: '#fff',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SignInScreen;