import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";

// import screen
import HomeScreen from "../Screens/HomeScreen";
import SearchScreen from "../Screens/SearchScreen";

const Stack = createStackNavigator();
export default function Index() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("white")
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}