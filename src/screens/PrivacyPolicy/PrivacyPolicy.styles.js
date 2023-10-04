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
      color:colors.white,
      fontSize: 16 / fontScale,
      flexShrink: 1,
    },
    listHeader:{
      fontWeight:"bold"
    },
    link:{
      textDecorationColor:colors.white,
      textDecorationLine:"underline"
    },
    contactUs:{ flexDirection: "row", flexWrap: "wrap" },
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
  });

export default makeStyles;
