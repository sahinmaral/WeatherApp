import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";

const makeStyles = (fontScale) =>
  StyleSheet.create({
    container: {
      height: "100%",
    },
    content: {
      width: "100%",
      gap: 10,
      height: "7%",
      flexDirection: "row",
      backgroundColor: colors.lightDarkBlue,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: colors.white,
      fontSize: 16 / fontScale,
      fontWeight: "500",
    },
  });

export default makeStyles;
