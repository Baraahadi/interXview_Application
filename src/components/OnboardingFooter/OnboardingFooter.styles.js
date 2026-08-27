import { StyleSheet } from 'react-native';

import { colors, radius, spacing } from '../../theme';

const styles = StyleSheet.create({
  infoBox: {
    width: '100%',
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },

  infoText: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },

  infoDescription: {
    marginTop: 2,
    fontSize: 11,
    color: colors.textSecondary,
  },

  nextButton: {
    width: '100%',
    height: 55,
    marginTop: spacing.md,
    marginBottom: spacing.md,
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
    marginTop: spacing.sm,
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
});

export default styles;
