// app/(tabs)/_layout.tsx
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons 
              name={focused ? 'home' : 'home'} 
              color={color} 
              size={24} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          title: 'Components',
          tabBarLabel: 'Components',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons 
              name={focused ? 'explore' : 'explore'} 
              color={color} 
              size={24} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
