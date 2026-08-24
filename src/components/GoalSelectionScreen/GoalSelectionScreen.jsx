import React, { useEffect, useRef } from 'react';
import { Animated, ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaskedView from '@react-native-masked-view/masked-view';
import {
  ArrowLeftRight,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  LockKeyhole,
} from 'lucide-react-native';

import colors from '../../theme/colors';
import styles from './GoalSelectionScreen.styles';
import GoalCard from '../GoalCard/GoalCard';

const TITLE_GRADIENT_COLORS = ['#6240E8', '#B94CC7', '#FF6B5F'];

const goals = [
  {
    title: 'Get my first job',
    description: "I'm preparing for my first",
    subdescription: 'job interview.',
    icon: BriefcaseBusiness,
    iconColor: '#6240E8',
    iconBackground: '#F0EAFF',
  },
  {
    title: 'Internship',
    description: 'I want to land my dream',
    subdescription: 'internship.',
    icon: GraduationCap,
    iconColor: '#6240E8',
    iconBackground: '#F0EAFF',
  },
  {
    title: 'Career change',
    description: "I'm switching careers and want",
    subdescription: 'to make a strong move.',
    icon: ArrowLeftRight,
    iconColor: '#FF637C',
    iconBackground: '#FFF0F2',
  },
  {
    title: 'Upcoming interview',
    description: 'I have an interview coming up',
    subdescription: 'and want to be fully prepared.',
    icon: CalendarDays,
    iconColor: '#FF8A24',
    iconBackground: '#FFF4E9',
  },
];

export default function GoalSelectionScreen() {
  const cardAnimations = useRef(
    goals.map(() => ({
      opacity: new Animated.Value(0),
      translateY: new Animated.Value(15),
    })),
  ).current;

  useEffect(() => {
    const animations = cardAnimations.flatMap((animation, index) => [
      Animated.timing(animation.opacity, {
        toValue: 1,
        duration: 400,
        delay: 150 + index * 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation.translateY, {
        toValue: 0,
        duration: 400,
        delay: 150 + index * 100,
        useNativeDriver: true,
      }),
    ]);

    Animated.parallel(animations).start();
  }, [cardAnimations]);
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(0.96)).current;
  const selectedCardScale = useRef(new Animated.Value(0.98)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 450,
        delay: 700,
        useNativeDriver: true,
      }),

      Animated.spring(buttonScale, {
        toValue: 1,
        delay: 700,
        friction: 7,
        tension: 60,
        useNativeDriver: true,
      }),
      Animated.spring(selectedCardScale, {
        toValue: 1,
        delay: 650,
        friction: 7,
        tension: 60,
        useNativeDriver: true,
      }),
    ]).start();
  }, [buttonOpacity, buttonScale, selectedCardScale]);
  return (
    <LinearGradient
      colors={[
        colors.backgroundStart,
        colors.backgroundMidLight,
        colors.backgroundMid,
        colors.backgroundEnd,
      ]}
      locations={[0, 0.35, 0.7, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={styles.header}>
            <Text style={styles.sparkle}>✦</Text>

            <View style={styles.title}>
              <Text style={styles.titleLine}>What are you</Text>

              <View style={styles.titleSecondLine}>
                <MaskedView
                  style={styles.gradientText}
                  maskElement={
                    <Text style={styles.titleAccent}>preparing</Text>
                  }
                >
                  <LinearGradient
                    colors={TITLE_GRADIENT_COLORS}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientFill}
                  >
                    <Text
                      style={[styles.titleAccent, styles.gradientTextContent]}
                    >
                      preparing
                    </Text>
                  </LinearGradient>
                </MaskedView>

                <Text style={styles.titleFor}> for?</Text>
              </View>
            </View>

            <Text style={styles.subtitle}>
              Tell us your goal so we can personalize
              {'\n'}
              your interview practice.
            </Text>
          </View>

          <View style={styles.goalsList}>
            {goals.map((goal, index) => (
              <Animated.View
                key={goal.title}
                style={{
                  opacity: cardAnimations[index].opacity,
                  transform: [
                    {
                      translateY: cardAnimations[index].translateY,
                    },
                    {
                      scale: index === 0 ? selectedCardScale : 1,
                    },
                  ],
                }}
              >
                <GoalCard {...goal} selected={index === 0} />
              </Animated.View>
            ))}
          </View>

          <Animated.View
            style={[
              styles.nextButton,
              {
                opacity: buttonOpacity,
                transform: [{ scale: buttonScale }],
              },
            ]}
          >
            <Text style={styles.nextButtonText}>Next</Text>

            <ArrowRight size={24} color="#FFFFFF" strokeWidth={2} />
          </Animated.View>

          <View style={styles.pagination}>
            <View style={[styles.dot, styles.dotInactive]} />
            <View style={[styles.dot, styles.dotActive]} />
            <View style={[styles.dot, styles.dotInactive]} />
            <View style={[styles.dot, styles.dotInactive]} />
          </View>

          <View style={styles.privacy}>
            <LockKeyhole
              size={15}
              color={colors.primaryLight}
              strokeWidth={2.5}
            />

            <Text style={styles.privacyText}>
              Your answers are private and secure.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
