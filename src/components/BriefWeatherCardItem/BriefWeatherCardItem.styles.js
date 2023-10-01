import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";

const makeStyles = (fontScale) => StyleSheet.create({
  container: {
    marginHorizontal: 13,
  },
  text: {
    color: colors.white,
    fontSize: 16 / fontScale,
  },
  header: {
    paddingBottom: 5,
  },
  temp: {
    fontSize: 12 / fontScale,
  },
  rain: {
    fontSize: 12 / fontScale,
  },
});

export default makeStyles;
