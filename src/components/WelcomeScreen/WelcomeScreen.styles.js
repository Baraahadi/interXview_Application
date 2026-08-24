import { StyleSheet } from 'react-native';

import { colors, radius, spacing, typography } from '../../theme';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },

  hero: {
    width: '100%',
    height: 340,
    marginBottom: spacing.sm,
  },

  logo: {
    width: '95%',
    height: 145,
  },

  headingContainer: {
    alignItems: 'center',
    marginTop: spacing.xxl,
  },

  headingPrimary: {
    fontSize: typography.headingPrimary,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
    letterSpacing: 1.5,
  },

  headingAccent: {
    fontSize: typography.headingAccent,
    fontWeight: '700',
    color: colors.accent,
    textAlign: 'center',
    letterSpacing: 1.3,
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.md,
  },

  dividerLine: {
    width: 28,
    height: 1,
    backgroundColor: colors.divider,
  },

  dividerDiamond: {
    width: 6,
    height: 6,
    backgroundColor: colors.accentDark,
    marginHorizontal: 7,
    transform: [{ rotate: '45deg' }],
  },

  description: {
    fontSize: typography.body,
    lineHeight: 21,
    fontWeight: '500',
    color: colors.textSecondary,
    textAlign: 'center',
  },

  buttonContainer: {
    width: '100%',
  },

  button: {
    width: '100%',
    height: 58,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.xl,
  },

  buttonText: {
    color: colors.white,
    fontSize: typography.button,
    fontWeight: '600',
  },

  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pageDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.dotInactive,
    marginHorizontal: 7,
  },

  activePageDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primaryLight,
  },
});

export default styles;
