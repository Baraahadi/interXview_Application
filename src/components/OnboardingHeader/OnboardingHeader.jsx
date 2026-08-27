import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

import styles from './OnboardingHeader.styles';

const TITLE_GRADIENT = ['#6240E8', '#B94CC7', '#FF6B5F'];

export default function OnboardingHeader({
  title,
  highlightedWord,
  titleSuffix,
  subtitle,
}) {
  return (
    <View style={styles.header}>
      <Text style={styles.sparkle}>✦</Text>

      <View style={styles.title}>
        <Text style={styles.titleLine}>{title}</Text>

        <View style={styles.titleSecondLine}>
          <MaskedView
            style={styles.gradientText}
            maskElement={
              <Text style={styles.titleAccent}>{highlightedWord}</Text>
            }
          >
            <LinearGradient
              colors={TITLE_GRADIENT}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientFill}
            >
              <Text style={[styles.titleAccent, styles.gradientTextContent]}>
                {highlightedWord}
              </Text>
            </LinearGradient>
          </MaskedView>

          <Text style={styles.titleSuffix}>{titleSuffix}</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
