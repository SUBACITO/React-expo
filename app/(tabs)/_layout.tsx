import { Ionicons } from '@expo/vector-icons';
import { Redirect, Stack, Tabs } from 'expo-router';

export default function TabsLayout() {
  const isSignedIn = false; // Replace with actual authentication logic
  if (!isSignedIn) {
    //  return <Redirect href="/(auth)/sign-in" />;
  }
  return <Tabs screenOptions={{ headerShown: false }}>
   <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({color, size}) => <Ionicons name='home' size={size} color={color}></Ionicons> }}  />
    <Tabs.Screen name="search" options={{ title: 'Search', tabBarIcon: ({color, size}) => <Ionicons name='search' size={size} color={color}></Ionicons> }} />
    <Tabs.Screen name="favorites" options={{ title: 'Favorites', tabBarIcon: ({color, size}) => <Ionicons name='heart' size={size} color={color}></Ionicons> }} />
    <Tabs.Screen name="account" options={{ title: 'Account', tabBarIcon: ({color, size}) => <Ionicons name='person' size={size} color={color}></Ionicons> }} />
  </Tabs>;
}

