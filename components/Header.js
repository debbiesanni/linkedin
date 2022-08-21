import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../color";
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{
          marginRight: 15,
        }}
      >
        <Image style={styles.image} source={require("../assets/icon.png")} />
      </Pressable>
      <Pressable
        style={styles.search}
        onPress={() => navigation.navigate("Search")}
      >
        <FontAwesome5 name="search" size={15} color={Color.darkColor} />
        <Text style={{ color: Color.darkColor, marginLeft: 5 }}>Search</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Message")}
        style={{
          marginLeft: 15,
        }}
      >
        <FontAwesome name="commenting" size={24} color={Color.darkColor} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: Color.bg,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    // height: 40,
    flex: 1,
    backgroundColor: Color.blue,
    padding: 8,
    borderRadius: 5,
  },
});
