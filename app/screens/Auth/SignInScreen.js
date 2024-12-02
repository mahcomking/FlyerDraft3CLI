import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const testFirebase = async () => {
        try {
            // Try to create a test user
            const userCredential = await auth().signInAnonymously();
            Alert.alert('Success', 'Firebase is configured correctly!');
            console.log('Test successful, user:', userCredential.user.uid);
        } catch (error) {
            Alert.alert('Error', 'Firebase configuration issue: ' + error.message);
            console.error('Firebase test error:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Sign In</Text>
                {/* Add a test button */}
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#4CAF50' }]}
                    onPress={testFirebase}
                >
                    <Text style={styles.buttonText}>Test Firebase Connection</Text>
                </TouchableOpacity>
                {/* Rest of your sign in form */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    form: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 16,
        borderRadius: 6,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#2f95dc',
        padding: 15,
        borderRadius: 6,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#2f95dc',
        textAlign: 'center',
        marginTop: 20,
    }
});