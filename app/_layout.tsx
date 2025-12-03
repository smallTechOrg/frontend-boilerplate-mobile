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
      {/* Screen name must match the file name (index.tsx)
        The title here is what appears in the HEADER and the DRAWER MENU 
      */}
      <Drawer.Screen
        name="index"
        options={{
          title: "Home Dashboard",
        }}
      />

      {/* Screen name must match the file name (details.tsx)
        This will automatically add "Details" to the drawer menu.
      */}
      <Drawer.Screen
        name="details"
        options={{
          title: "Details Page",
        }}
      />

    </Drawer>
  );
}