import { colors, white } from '@constants/colors.constant';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  title: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  filterText: {
    color: white,
    fontWeight: 'bold',
  },
  errorText: {
    marginHorizontal: 16,
    color: colors.status.error,
  },
  emptyText: {
    textAlign: 'center',
    color: colors.text.secondary,
    fontSize: 16,
    marginTop: 20,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
