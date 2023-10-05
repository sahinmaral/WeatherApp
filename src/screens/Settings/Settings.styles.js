import { StyleSheet,StatusBar,Dimensions } from "react-native";
import colors from "../../assets/styles/colors";

const baseStyles = {
  button: {
    backgroundColor: colors.lightDarkBlue,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
};

const makeStyles = (fontScale) =>
  StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: colors.slate },
    container: {
      flex: 1,
      height: "100%",
      marginHorizontal: 10,
      marginTop: StatusBar.currentHeight || 0,
      marginBottom: 10,
      padding: 20,
      borderRadius: 30,
    },
    button: {
      main: {
        ...baseStyles.button,
        alignItems: "flex-end",
        width: Dimensions.get("screen").width / 5,
      },
      extra: {
        ...baseStyles.button,
        width: Dimensions.get("screen").width / 2,
      },
    },
    header: {
      container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
      },
      text: {
        width: "80%",
        fontSize: 16 / fontScale,
        fontWeight: "bold",
        color: colors.white,
        textAlign: "center",
      },
    },
    section: {
      container: {
        gap: 10,
      },
      header: {
        fontSize: 13 / fontScale,
      },
      row: {
        container: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
        text: {
          fontSize: 16 / fontScale,
        },
      },
    },
    divider: {
      width: "100%",
      height: 1,
      marginVertical: 10,
      backgroundColor: colors.white,
    },
    extra: {
      container: {
        gap: 10,
      },
      header: {
        fontSize: 13 / fontScale,
      },
      text: {
        fontSize: 16 / fontScale,
      },
    },
  });

export default makeStyles;
