import React from 'react'
import * as firebase from '@react-native-firebase/app';
import {View, Text, StyleSheet,StatusBar} from 'react-native'
import  {SignInContextProvider}  from './src/contexts/authContext'
import {colors} from './src/global/styles'
import RootNavigator from './src/navigation/rootNavigation'
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";



// Your Firebase configuration goes here
const firebaseConfig = {
  apiKey: "AIzaSyCLsCia929dev17a7SReY6BoRE369fsQac",
  authDomain: "flyerdraft3cli.firebaseapp.com",
  projectId: "flyerdraft3cli",
  storageBucket: "flyerdraft3cli.firebasestorage.app",
  messagingSenderId: "207628513166",
  appId: "1:207628513166:web:9e7882daf1106dfa887edf",
  measurementId: "G-ZMSN0LSFDQ"
};

const app = initializeApp(firebaseConfig);
const initializeAnalytics = async () => {
  if (await isSupported()) {
    const analytics = getAnalytics(app);
  } else {
    console.log('Analytics not supported in this environment');
  }
};




export default function App(){
  return(
    <SignInContextProvider>
    <View style = {styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />
   
        <RootNavigator />
     
    </View>
    </SignInContextProvider> 
  
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})