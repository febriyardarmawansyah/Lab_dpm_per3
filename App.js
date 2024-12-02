import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import UserProfileScreen from './src/screens/UserProfileScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <UserProfileScreen />
    </SafeAreaView>
  );
};

export default App;
