import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { ComponentType, JSX } from "react";
import ExploreScreen from "./(tabs)/explore";
import HomeScreen from "./(tabs)/index";

const Tab = createBottomTabNavigator();

export default function Index(): JSX.Element {
  const screenOptions = {
    headerShown: false,
  } as const;

  const renderIcon = (
    name: "home" | "explore"
  ): ((props: {focused: boolean }) => JSX.Element) => {
    const IconComponent = () =>
      <MaterialIcons name={name} size={24} />;
    IconComponent.displayName = `TabIcon(${name})`;
    return IconComponent;
  }


  const tabScreen = (
    name: string,
    component: ComponentType<any>,
    iconName: "home" | "explore",
    label: string
  ) => (
    <Tab.Screen
      key={name}
      name={name}
      component={component}
      options={{
        tabBarLabel: label,
        tabBarIcon: renderIcon(iconName),
      }}
    />
  );

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabScreen("Home", HomeScreen, "home", "Home")}
      {tabScreen("Explore", ExploreScreen, "explore", "Explore")}
    </Tab.Navigator>
  );
}
