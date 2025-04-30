import { black, colors, grayLight } from '@constants/colors.constant';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    color: colors.text.primary,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: black,
  },
  button: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  menuButton: {
    padding: 10,
    backgroundColor: grayLight,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: black,
  },
  dateButton: {
    padding: 10,
    backgroundColor: grayLight,
    borderRadius: 5,
    marginBottom: 10,
  },
});
