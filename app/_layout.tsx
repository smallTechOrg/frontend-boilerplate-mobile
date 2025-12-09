// app/_layout.tsx
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        // Global options applied to ALL screens in the drawer
        headerStyle: {
          backgroundColor: '#ADD8E6', // Light Blue Header Background
        },
        headerTintColor: 'black', // Color of the title and back/menu button
        drawerActiveTintColor: 'blue', // Color for the active link in the drawer menu
      }}
    >
      
      {/* Root index page - shown by default */}
      <Drawer.Screen
        name="index"
        options={{
          title: "Home Dashboard",
        }}
      />

      {/* Tabs layout with bottom tabs navigation */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Main",
          headerShown: true,
        }}
      />

      {/* Additional drawer items can be added here */}
      <Drawer.Screen
        name="details"
        options={{
          title: "Details Page",
        }}
      />

    </Drawer>
    
  );
}
