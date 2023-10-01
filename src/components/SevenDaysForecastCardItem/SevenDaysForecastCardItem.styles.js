import { StyleSheet } from "react-native";
import baseStyles from "../../assets/styles/baseStyles";
import colors from "../../assets/styles/colors";

const makeStyles = (fontScale) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.lightDarkBlue,
      flex: 1,
    },
    date: [baseStyles.text, { flex: 1, fontSize: 14 / fontScale }],
    rainAndIcon: {
      container: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
      },
      rain: [baseStyles.text, { fontSize: 14 / fontScale }],
    },
    temperature: [
      baseStyles.text,
      { flex: 1, textAlign: "right", fontSize: 14 / fontScale },
    ],
  });

export default makeStyles;
