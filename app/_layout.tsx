// app/_layout.tsx
import { HeaderBackButton } from "@react-navigation/elements";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer
      initialRouteName="(tabs)"
      screenOptions={{
        // Global options applied to ALL screens in the drawer
        headerStyle: {
          backgroundColor: '#ADD8E6', // Light Blue Header Background
        },
        headerTintColor: 'black', // Color of the title and back/menu button
        drawerActiveTintColor: 'blue', // Color for the active link in the drawer menu
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
       <Drawer.Screen
        name="(tabs)"
        options={{
         drawerItemStyle: { display: "none" }  
        }}
      />

      <Drawer.Screen
        name="details"
        options={({ navigation }) => ({
          title: "Details Page",
          headerLeft: (props) => (
            <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Drawer>
  );
}
