import { white } from '@constants/colors.constant';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: white,
    padding: 20,
  },
  heading: {
    marginTop: 80,
    fontSize: 32,
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 80,
    width: '100%',
    padding: 20,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    width: '100%',
  },
});
