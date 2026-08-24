import { StyleSheet } from 'react-native';

import { colors, radius, spacing } from '../../theme';

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
    paddingTop: 20,
    // marginTop: 19,
  },

  header: {
    width: '100%',
    alignItems: 'center',
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

  titleFor: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    color: colors.textPrimary,
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

  subtitle: {
    fontSize: 15,
    lineHeight: 25,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  goalsList: {
    width: '100%',
    marginTop: spacing.xl,
  },

  nextButton: {
    width: '100%',
    height: 55,
    marginTop: spacing.lg,
    borderRadius: radius.pill,
    backgroundColor: colors.primaryLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nextButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    marginRight: 10,
  },

  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 10,
  },

  dotActive: {
    backgroundColor: colors.primaryLight,
  },

  dotInactive: {
    backgroundColor: '#D9D9EE',
  },

  privacy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
    // marginBottom: spacing.xl,
  },

  privacyText: {
    marginLeft: 6,
    fontSize: 11,
    color: colors.primaryLight,
  },
});

export default styles;
