import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import WelcomeScreen from './src/components/WelcomeScreen/WelcomeScreen';
import GoalSelectionScreen from './src/components/GoalSelectionScreen/GoalSelectionScreen';
export default function App() {
  return (
    <SafeAreaProvider>
      {/* <WelcomeScreen /> */}
      <GoalSelectionScreen />
    </SafeAreaProvider>
  );
}
