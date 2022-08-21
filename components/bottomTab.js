import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeStack";
import MyNetwork from "../screens/myNetwork/MyNetwork";
import Posts from "./PostStack";
import Notifications from "../screens/notification/Notifications";
import JobScreen from "../screens/job/JobScreen";
import {
  Ionicons,
  Entypo,
  Octicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Color } from "../color";

export default function App() {
  const Tab = createBottomTabNavigator();
  const customButton = (props) => (
    <TouchableOpacity
      {...props}
      style={
        props.accessibilityState.selected
          ? [
              props.style,
              {
                borderTopColor: Color.color,
                borderTopWidth: 2,
              },
            ]
          : props.style
      }
    />
  );
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          size = 20;
          color = focused ? Color.color : "#939393";
          if (route.name === "Home") {
            return focused ? (
              <Ionicons name="ios-home-sharp" size={size} color={color} />
            ) : (
              <Entypo name="home" size={size} color={color} />
            );
          } else if (route.name === "My Network") {
            return focused ? (
              <Ionicons name="people" size={size} color={color} />
            ) : (
              <Octicons name="people" size={size} color={color} />
            );
          } else if (route.name === "Post") {
            return focused ? (
              <Ionicons name="people" size={size} color={color} />
            ) : (
              <MaterialIcons name="add-box" size={size} color={color} />
            );
          } else if (route.name === "Notifications") {
            return focused ? (
              <MaterialIcons
                name="notifications-active"
                size={size}
                color={color}
              />
            ) : (
              <Ionicons name="md-notifications" size={size} color={color} />
            );
          } else if (route.name === "Jobs") {
            return focused ? (
              <MaterialCommunityIcons
                name="bag-checked"
                size={size}
                color={color}
              />
            ) : (
              <Foundation name="shopping-bag" size={size} color={color} />
            );
          }
        },
        tabBarActiveBackgroundColor: Color.bg,
        tabBarInactiveBackgroundColor: Color.bg,
        tabBarInactiveTintColor: "#939393",
        tabBarActiveTintColor: Color.color,
        tabBarStyle: { borderTopColor: "#dbdbdb" },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarButton: customButton }}
      />
      <Tab.Screen
        name="My Network"
        component={MyNetwork}
        options={{ tabBarButton: customButton }}
      />
      <Tab.Screen
        name="Post"
        component={Posts}
        options={{ headerShown: false, tabBarButton: customButton }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ tabBarButton: customButton }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobScreen}
        options={{ tabBarButton: customButton }}
      />
    </Tab.Navigator>
  );
}
