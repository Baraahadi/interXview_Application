import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowRight, Sparkles } from 'lucide-react-native';

import colors from '../../theme/colors';
import styles from './OnboardingFooter.styles';

export default function OnboardingFooter({
  currentStep = 1,
  totalSteps = 4,
  onNext,
}) {
  const paginationDots = Array.from({ length: totalSteps });

  return (
    <>
      <View style={styles.infoBox}>
        <View style={styles.infoIcon}>
          <Sparkles size={22} color={colors.primaryLight} strokeWidth={2} />
        </View>

        <View style={styles.infoText}>
          <Text style={styles.infoTitle}>Personalized for you</Text>

          <Text style={styles.infoDescription}>
            we'll customize your practice sessions based on your unique needs.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        activeOpacity={0.85}
        onPress={onNext}
      >
        <Text style={styles.nextButtonText}>Next</Text>

        <ArrowRight size={24} color="#FFFFFF" strokeWidth={2} />
      </TouchableOpacity>

      <View style={styles.pagination}>
        {paginationDots.map((_, index) => (
          <View
            key={`pagination-dot-${index + 1}`}
            style={[
              styles.dot,
              index + 1 === currentStep ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>
    </>
  );
}
