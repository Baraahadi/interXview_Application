import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Check } from 'lucide-react-native';

import styles from './RoleCard.styles';

export default function RoleCard({
  title,
  icon: Icon,
  iconColor = '#6240E8',
  iconBackground = '#F0EAFF',
  selected = false,
  onPress,
}) {
  const cardStyle = [styles.card, selected && styles.selectedCard];

  return (
    <TouchableOpacity style={cardStyle} activeOpacity={0.85} onPress={onPress}>
      {selected && (
        <View style={styles.check}>
          <Check size={15} color="#FFFFFF" strokeWidth={3} />
        </View>
      )}

      <View style={[styles.iconContainer, { backgroundColor: iconBackground }]}>
        <Icon size={30} color={iconColor} strokeWidth={2.5} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
