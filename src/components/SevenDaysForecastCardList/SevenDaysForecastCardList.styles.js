import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";

const makeStyles = (fontScale) =>
  StyleSheet.create({
    header: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: colors.lightDarkBlue,
      color: colors.white,
      fontSize: 16 / fontScale,
      fontWeight: "bold",
    },
  });

export default makeStyles;
