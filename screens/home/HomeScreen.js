import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../../color";
import Header from "../../components/Header";
import { data } from "./data";
import moment from "moment";
import BottomSheet from "../../components/BottomSheet";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
  Octicons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const Card = (item) => {
    return (
      <View style={styles.contentHolder}>
        {item.postState != "posted" && (
          <View
            style={[
              styles.flexRow,
              styles.mB10,
              styles.pB10,
              styles.pH15,
              {
                borderBottomColor: "#dbdbdb",
                borderBottomWidth: 1,
                alignItems: "center",
              },
            ]}
          >
            <Image
              style={{ height: 35, width: 35, borderRadius: 50 }}
              source={require("../../assets/icon.png")}
            />
            <View
              style={[
                styles.flexRow,
                { justifyContent: "space-between", marginLeft: 10, flex: 1 },
              ]}
            >
              <View style={[styles.flexRow, { alignItems: "center" }]}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {item.name}
                </Text>
                <Text style={{ marginLeft: 2 }}>
                  {item.postState} {item.postState === "commented" && "on "}
                  this
                </Text>
              </View>
              <MaterialCommunityIcons
                onPress={() => navigation.navigate("Share")}
                name="dots-vertical"
                size={24}
                color="black"
              />
            </View>
          </View>
        )}
        <View style={[styles.flexRow, styles.pH15, styles.mB10]}>
          <Image
            style={{ height: 45, width: 45 }}
            source={require("../../assets/icon.png")}
          />
          <View
            style={[
              styles.flexRow,
              { justifyContent: "space-between", marginLeft: 10, flex: 1 },
            ]}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                {item.name}
              </Text>
              <Text>{item.position}</Text>
              <Text>{moment(item.date).fromNow()}</Text>
            </View>
            {item.postState === "posted" ? (
              <MaterialCommunityIcons
                onPress={() => navigation.navigate("Share")}
                name="dots-vertical"
                size={24}
                color="black"
              />
            ) : (
              <View style={[styles.flexRow, { alignItems: "center" }]}>
                <Ionicons name="add" size={24} color="black" />
                <Text>Follow</Text>
              </View>
            )}
          </View>
        </View>
        <View>
          <View style={[styles.pH15]}>
            <View style={[styles.mB10]}>
              <Text>{item.post}</Text>
            </View>
            <View style={[styles.flexRow, styles.mB10]}>
              {item.hasTags.map((tag, index) => (
                <Text key={index}>{tag}</Text>
              ))}
            </View>
          </View>
          {item.image ? (
            <Image
              style={[{ height: 210, flex: 1, width: null }, styles.mB10]}
              source={require("../../assets/icon.png")}
            />
          ) : (
            <View></View>
          )}
        </View>
        <View
          style={[
            styles.flexRow,
            styles.pH15,
            styles.justifyContentSB,
            styles.mB10,
          ]}
        >
          <View style={[styles.flexRow]}>
            <SimpleLineIcons name="like" size={24} color="black" />
            <Ionicons
              name="heart-dislike-circle-sharp"
              size={24}
              color="black"
            />
            <Ionicons name="heart-circle-sharp" size={24} color="black" />
            <Text>{item.likes}</Text>
          </View>
          <View style={[styles.flexRow]}>
            <Text>1,234 comments</Text>
            <Octicons name="dot-fill" size={24} color="black" />
            <Text>6,767 shares</Text>
          </View>
        </View>
        <View style={[styles.flexRow, styles.pH15, styles.justifyContentSB]}>
          <View style={[styles.stateHolder]}>
            <SimpleLineIcons name="like" size={24} color="black" />
            <Text>Like</Text>
          </View>
          <View style={[styles.stateHolder]}>
            <FontAwesome5 name="comment-dots" size={24} color="black" />
            <Text>Comment</Text>
          </View>
          <View style={[styles.stateHolder]}>
            <MaterialCommunityIcons name="share" size={24} color="black" />
            <Text>Share</Text>
          </View>
          <View style={[styles.stateHolder]}>
            <Feather name="send" size={24} color="black" />
            <Text>Send</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: Color.backOrWhite,
        flex: 1,
        position: "relative",
      }}
    >
      <Header />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.postState === "sharedContent") {
            return (
              <View>
                <View>
                  <Text>view</Text>
                </View>
                {/* {Card(item)} */}
              </View>
            );
          } else return Card(item);
        }}
      />
      <BottomSheet />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentHolder: {
    backgroundColor: Color.darkBg,
    marginTop: 10,
    flex: 1,
    paddingVertical: 10,
  },
  flexRow: {
    flexDirection: "row",
  },
  poster: {},
  pH15: {
    paddingHorizontal: 15,
  },
  mB10: {
    marginBottom: 10,
  },
  pB10: {
    paddingBottom: 10,
  },
  justifyContentSB: {
    justifyContent: "space-between",
  },
  stateHolder: {
    alignItems: "center",
  },
});
