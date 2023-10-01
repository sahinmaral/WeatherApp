import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";

const baseStyle = (fontScale) => {
  return {
    text: {
      fontSize: 16 / fontScale,
      color: colors.white,
    },
  };
};

const makeStyles = (fontScale) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      backgroundColor: "white",
      width: "65%",
      gap: 20,
      padding: 20,
      borderRadius: 10,
      alignItems: "flex-start",
    },
    text: {
      normal:{
        ...baseStyle(fontScale).text,
      },
      selected: {
        ...baseStyle(fontScale).text,
        color: colors.red,
      },
    },
  });

export default makeStyles;
