import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Animated } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import globalStyles from '../styles/globalStyles';

const UserProfileScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Animated value for button scaling
  const scale = new Animated.Value(1);

  // Simulate data fetching
  useEffect(() => {
    console.log('Component Mounted');
    const fetchData = async () => {
      setTimeout(() => {
        setUser({
          name: 'Febri Yar Darmawansyah P',
          age: 21,
          bio: 'A software developer who loves coding and coffee.',
          avatar: 'https://via.placeholder.com/150',
        });
        setIsLoading(false);
      }, 2000); // Simulated API delay
    };
    fetchData();

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95, // Scale down the button when pressed
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1, // Scale back the button to its original size
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>User Profile</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ProfileCard user={user} />
      )}
      
      {/* Animated Log Out Button */}
      <Animated.View
        style={[styles.logoutButton, { transform: [{ scale }] }]}>
        <TouchableOpacity
          style={styles.button}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => console.log('Log Out Pressed')}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  logoutButton: {
    marginTop: 20,
    width: '80%',
    borderRadius: 5,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
