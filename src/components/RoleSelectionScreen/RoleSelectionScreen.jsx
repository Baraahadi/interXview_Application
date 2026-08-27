import React from 'react';
import { ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Megaphone,
  MoreHorizontal,
  PenTool,
  Server,
} from 'lucide-react-native';

import colors from '../../theme/colors';
import OnboardingFooter from '../OnboardingFooter/OnboardingFooter';
import OnboardingHeader from '../OnboardingHeader/OnboardingHeader';
import RoleCard from '../RoleCard/RoleCard';
import styles from './RoleSelectionScreen.styles';

const ROLES = [
  {
    title: 'Frontend Developer',
    icon: Code2,
    iconColor: '#6240E8',
    iconBackground: '#F0EAFF',
    selected: true,
  },
  {
    title: 'Backend Developer',
    icon: Server,
    iconColor: '#4F7FF7',
    iconBackground: '#EEF4FF',
  },
  {
    title: 'UI/UX Designer',
    icon: PenTool,
    iconColor: '#F04B91',
    iconBackground: '#FFF0F7',
  },
  {
    title: 'Data Analyst',
    icon: BarChart3,
    iconColor: '#22B8A7',
    iconBackground: '#E9FBF8',
  },
  {
    title: 'Product Manager',
    icon: BriefcaseBusiness,
    iconColor: '#FF637C',
    iconBackground: '#FFF0F2',
  },
  {
    title: 'Marketing Specialist',
    icon: Megaphone,
    iconColor: '#FF7A24',
    iconBackground: '#FFF4E9',
  },
  {
    title: 'Other',
    icon: MoreHorizontal,
    iconColor: '#6240E8',
    iconBackground: '#F0EAFF',
  },
];

const ROLE_ROWS = [];

for (let index = 0; index < ROLES.length; index += 2) {
  ROLE_ROWS.push(ROLES.slice(index, index + 2));
}

export default function RoleSelectionScreen() {
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
          <OnboardingHeader
            title="What role are you"
            highlightedWord="aiming"
            titleSuffix=" for?"
            subtitle={
              <>
                Choose the role that matches your goal{'\n'}
                so we can tailor your practice.
              </>
            }
          />

          <View style={styles.roleArea}>
            {ROLE_ROWS.map(row => {
              const isSingleItemRow = row.length === 1;

              return (
                <View
                  key={row.map(role => role.title).join('-')}
                  style={
                    isSingleItemRow ? styles.gridRowCenter : styles.gridRow
                  }
                >
                  {row.map(role => (
                    <View key={role.title} style={styles.gridItem}>
                      <RoleCard
                        title={role.title}
                        icon={role.icon}
                        iconColor={role.iconColor}
                        iconBackground={role.iconBackground}
                        selected={role.selected}
                      />
                    </View>
                  ))}
                </View>
              );
            })}
          </View>

          <OnboardingFooter currentStep={3} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
