import { Appearance } from "react-native";

const getColorScreen = Appearance.getColorScheme();
const state = getColorScreen === "light" ? true : false;
// const state = false;
export const Color = {
  bg: state ? "#fff" : "#222327",
  color: state ? "#000" : "#fff",
  primary: "#0072B1",
  backOrWhite: state ? "#e1e1e1" : "#000",
  blue: state ? "#dee6f2" : "#3e6993",
  darkColor: state ? "#506176" : "e1e1e1",
  darkBg: state ? "#fff" : "#212121",
};
