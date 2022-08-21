import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Share from "../screens/post/Posts";

const PostStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Share Post" component={Share} />
    </Stack.Navigator>
  );
};

export default PostStack;

const styles = StyleSheet.create({});
