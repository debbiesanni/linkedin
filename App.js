import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Color } from "./color";
import TabNav from "./components/bottomTab";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="TabNav"
          options={{ headerShown: false }}
          component={TabNav}
        />
      </Drawer.Navigator>
      <StatusBar style="auto" backgroundColor={Color.bg} />
    </NavigationContainer>
  );
}
