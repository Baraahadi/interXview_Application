import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './GoalCard.styles';

export default function GoalCard({
  title,
  description,
  subdescription,
  icon: Icon,
  iconColor = '#6240E8',
  iconBackground = '#F0EAFF',
  selected = false,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.cardWrapper}
      activeOpacity={0.85}
      onPress={onPress}
    >
      {selected && (
        <LinearGradient
          colors={['#6240E8', '#FF6B5F']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.selectedBorder}
        />
      )}

      <View style={styles.card}>
        <View style={styles.content}>
          <View
            style={[styles.iconContainer, { backgroundColor: iconBackground }]}
          >
            <Icon size={30} color={iconColor} strokeWidth={2.5} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description}>{subdescription}</Text>
          </View>
        </View>

        <View style={[styles.radio, selected && styles.selectedRadio]}>
          {selected && <View style={styles.radioInner} />}
        </View>
      </View>
    </TouchableOpacity>
  );
}
