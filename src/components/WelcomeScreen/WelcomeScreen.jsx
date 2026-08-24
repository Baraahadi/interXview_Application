import React, { useEffect, useRef } from 'react';
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './WelcomeScreen.styles';

const HERO_IMAGE = require('../../../assets/hero_transparent.png');
const LOGO_IMAGE = require('../../../assets/interview-header-logo.png');

const GRADIENT_COLORS = [
  colors.backgroundStart,
  colors.backgroundMidLight,
  colors.backgroundMid,
  colors.backgroundEnd,
];
const GRADIENT_LOCATIONS = [0, 0.35, 0.7, 1];

const ANIMATION = {
  hero: {
    duration: 700,
  },
  logo: {
    delay: 350,
    duration: 500,
  },
  heading: {
    delay: 650,
    duration: 500,
  },
  divider: {
    delay: 900,
    expandDuration: 350,
    settleDuration: 200,
  },
  description: {
    delay: 1150,
    duration: 500,
  },
  button: {
    delay: 1450,
    duration: 500,
  },
};

export default function WelcomeScreen() {
  const heroOpacity = useRef(new Animated.Value(0)).current;
  const heroTranslateY = useRef(new Animated.Value(20)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const headingOpacity = useRef(new Animated.Value(0)).current;
  const dividerScale = useRef(new Animated.Value(0.3)).current;
  const descriptionOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonTranslateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(heroOpacity, {
        toValue: 1,
        duration: ANIMATION.hero.duration,
        useNativeDriver: true,
      }),

      Animated.timing(heroTranslateY, {
        toValue: 0,
        duration: ANIMATION.hero.duration,
        useNativeDriver: true,
      }),

      Animated.timing(logoOpacity, {
        toValue: 1,
        delay: ANIMATION.logo.delay,
        duration: ANIMATION.logo.duration,
        useNativeDriver: true,
      }),

      Animated.timing(headingOpacity, {
        toValue: 1,
        delay: ANIMATION.heading.delay,
        duration: ANIMATION.heading.duration,
        useNativeDriver: true,
      }),

      Animated.sequence([
        Animated.timing(dividerScale, {
          toValue: 1.15,
          delay: ANIMATION.divider.delay,
          duration: ANIMATION.divider.expandDuration,
          useNativeDriver: true,
        }),

        Animated.timing(dividerScale, {
          toValue: 1,
          duration: ANIMATION.divider.settleDuration,
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(descriptionOpacity, {
        toValue: 1,
        delay: ANIMATION.description.delay,
        duration: ANIMATION.description.duration,
        useNativeDriver: true,
      }),

      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          delay: ANIMATION.button.delay,
          duration: ANIMATION.button.duration,
          useNativeDriver: true,
        }),

        Animated.timing(buttonTranslateY, {
          toValue: 0,
          delay: ANIMATION.button.delay,
          duration: ANIMATION.button.duration,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [
    heroOpacity,
    heroTranslateY,
    logoOpacity,
    headingOpacity,
    dividerScale,
    descriptionOpacity,
    buttonOpacity,
    buttonTranslateY,
  ]);

  return (
    <LinearGradient
      colors={GRADIENT_COLORS}
      locations={GRADIENT_LOCATIONS}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <Animated.Image
            source={HERO_IMAGE}
            style={[
              styles.hero,
              {
                opacity: heroOpacity,
                transform: [{ translateY: heroTranslateY }],
              },
            ]}
            resizeMode="contain"
          />

          <Animated.Image
            source={LOGO_IMAGE}
            style={[
              styles.logo,
              {
                opacity: logoOpacity,
              },
            ]}
            resizeMode="contain"
          />

          <Animated.View
            style={[
              styles.headingContainer,
              {
                opacity: headingOpacity,
              },
            ]}
          >
            <Text style={styles.headingPrimary}>Real interview practice.</Text>

            <Text style={styles.headingAccent}>Real confidence.</Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.divider,
              {
                transform: [{ scaleX: dividerScale }],
              },
            ]}
          >
            <View style={styles.dividerLine} />
            <View style={styles.dividerDiamond} />
            <View style={styles.dividerLine} />
          </Animated.View>

          <Animated.Text
            style={[
              styles.description,
              {
                opacity: descriptionOpacity,
              },
            ]}
          >
            Practice realistic interviews, get meaningful feedback,{'\n'}
            and walk into any interview with confidence.
          </Animated.Text>

          <Animated.View
            style={[
              styles.buttonContainer,
              {
                opacity: buttonOpacity,
                transform: [{ translateY: buttonTranslateY }],
              },
            ]}
          >
            <TouchableOpacity style={styles.button} activeOpacity={0.85}>
              <Text style={styles.buttonText}>Start Your Journey</Text>
            </TouchableOpacity>
          </Animated.View>

          <View style={styles.pagination}>
            <View style={[styles.pageDot, styles.activePageDot]} />
            <View style={styles.pageDot} />
            <View style={styles.pageDot} />
            <View style={styles.pageDot} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
