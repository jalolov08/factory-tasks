import { colors, white } from '@constants/colors.constant';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    elevation: 5,
    padding: 20,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    marginBottom: 10,
    backgroundColor: white,
  },
  saveButton: {
    marginTop: 20,
  },
});
