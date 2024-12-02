import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

const DeliveryHomeScreen = ({ navigation }: any) => {
  const { logout } = useAuth();

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Available Jobs</Text>
          <TouchableOpacity onPress={logout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
  
        <ScrollView style={styles.content}>
          <View style={styles.statusBar}>
            <Text style={styles.statusText}>Status: Available</Text>
            <TouchableOpacity style={styles.toggleButton}>
              <Text style={styles.toggleText}>Go Offline</Text>
            </TouchableOpacity>
          </View>
  
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Find Jobs</Text>
            <Text style={styles.cardDescription}>Browse available deliveries</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Current Job</Text>
            <Text style={styles.cardDescription}>View active delivery details</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Earnings</Text>
            <Text style={styles.cardDescription}>View your delivery history and earnings</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  };

  export default DeliveryHomeScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    logoutText: {
      color: '#007AFF',
      fontSize: 16,
    },
    content: {
      flex: 1,
      padding: 16,
    },
    statusBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
    },
    statusText: {
      fontSize: 16,
      fontWeight: '500',
    },
    toggleButton: {
      backgroundColor: '#007AFF',
      padding: 8,
      borderRadius: 6,
    },
    toggleText: {
      color: '#fff',
      fontWeight: '500',
    },
    card: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    cardDescription: {
      fontSize: 14,
      color: '#666',
    },
  });
  
