import { StyleSheet } from 'react-native';

import { colors, radius, spacing } from '../../theme';

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    height: 100,
    borderRadius: radius.md,
    padding: 1.5,
    marginBottom: spacing.sm,
  },

  selectedBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: radius.md,
  },

  card: {
    flex: 1,
    borderRadius: radius.md,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 60,
    height: 62,
    borderRadius: 30,
    backgroundColor: '#F0EAFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primaryText,
    marginBottom: 4,
  },

  description: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray',
  },

  radio: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 2,
    borderColor: colors.dotInactive,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedRadio: {
    borderColor: '#7548E8',
  },

  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#7548E8',
  },
});

export default styles;
