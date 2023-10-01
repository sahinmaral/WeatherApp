import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";

const makeStyles = (fontScale) =>
  StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: colors.slate },
    container: {
      flex: 1,
      height: "100%",
      marginHorizontal: 10,
      marginTop: 30,
      marginBottom: 10,
      padding: 20,
      borderRadius: 30,
    },
    text: {
      fontSize: 16 / fontScale,
      flexShrink: 1,
    },
    about: {
      list: {
        header: {
          fontWeight: "bold",
          fontSize: 25 / fontScale,
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: colors.white,
        },
      },
    },
    header: {
      container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
      },
      text: {
        width: "80%",
        fontSize: 16 / fontScale,
        fontWeight: "bold",
        color: colors.white,
        textAlign: "center",
      },
    },
    feature: {
      row: {
        container: { marginVertical: 10 },
      },
      header: {
        fontWeight: "bold",
        fontSize: 20 / fontScale,
        paddingBottom: 10,
      },
      list: {
        container: { gap: 10, paddingLeft: 10 },
        row: { flexDirection: "row", gap: 10 },
      },
    },
    author: {
      container: {
        gap: 10,
        paddingTop: 10,
      },
      link: {
        container: { flexDirection: "row" },
        text: {
          borderBottomColor: colors.white,
          borderBottomWidth: 2,
        },
      },
    },
  });

export default makeStyles;
