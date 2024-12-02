import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6347',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  button: {
    width: '80%',
    padding: 12,
    borderRadius: 25,
    backgroundColor: '#ff6347',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    transition: 'transform 0.2s ease-in-out',
  },
  buttonHover: {
    transform: [{ scale: 1.1 }],
  },
});

export default globalStyles;
