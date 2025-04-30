import { colors, white } from '@constants/colors.constant';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 16,
    flex: 1,
  },
  card: {
    backgroundColor: white,
    borderRadius: 12,
    elevation: 2,
    paddingVertical: 8,
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
  divider: {
    marginVertical: 12,
  },
  errorText: {
    marginTop: 40,
    textAlign: 'center',
    color: colors.status.error,
  },
  centered: {
    marginTop: 50,
  },
});
