import React, { forwardRef } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = forwardRef(({ user }, ref) => {
  return (
    <View ref={ref} style={styles.card}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.age}>Age: {user.age}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    width: '100%',
    maxWidth: 350,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#ff6347',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  age: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProfileCard;
