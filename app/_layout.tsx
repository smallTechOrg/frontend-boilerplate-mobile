// app/_layout.tsx
import { HeaderBackButton } from "@react-navigation/elements";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer
      initialRouteName="(tabs)"
      screenOptions={{
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
        name="about"
        options={({ navigation }) => ({
          title: "About Page",
          headerLeft: (props) => (
            <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Drawer>
  );
}
