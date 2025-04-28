import { colors } from '@constants/colors.constant';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  card: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: colors.surface,
    borderRadius: 10,
    elevation: 5,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 20,
  },
  userInfoContainer: {
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    color: colors.text.secondary,
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  role: {
    fontStyle: 'italic',
    color: colors.secondary,
  },
  cardActions: {
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
