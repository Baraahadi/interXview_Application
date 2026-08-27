import { StyleSheet } from 'react-native';

import { colors, spacing } from '../../theme';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    marginTop: spacing.md,
  },

  sparkle: {
    fontSize: 17,
    color: colors.primaryLight,
  },

  title: {
    alignItems: 'center',
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },

  titleLine: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
  },

  titleSecondLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleAccent: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '600',
    color: 'white',
  },

  titleSuffix: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    color: colors.textPrimary,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 25,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  gradientText: {
    height: 48,
  },

  gradientFill: {
    flex: 1,
  },

  gradientTextContent: {
    opacity: 0,
  },
});

export default styles;
