import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#25292e' },
      }}
    >
      {/* Stack will handle screen rendering based on the folder structure */}
    </Stack>
  );
}