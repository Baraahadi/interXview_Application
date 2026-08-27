import { StyleSheet } from 'react-native';

import { spacing } from '../../theme';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 27,
  },

  roleArea: {
    width: '100%',
    marginTop: spacing.md,
  },

  gridRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  gridRowCenter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  gridItem: {
    width: '48%',
  },
});

export default styles;
