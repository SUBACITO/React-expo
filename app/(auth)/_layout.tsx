
import { Text, View } from '@/components/Themed';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack 
        screenOptions={{
            headerShown: false,
        }}
    />
  );
}


