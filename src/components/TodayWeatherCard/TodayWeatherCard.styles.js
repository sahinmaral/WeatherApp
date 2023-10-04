import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";
import baseStyles from "../../assets/styles/baseStyles";
import Constants from "expo-constants";

const makeStyles = (fontScale) =>
  StyleSheet.create({
    container: {
      width: "95%",
      marginTop: Constants.statusBarHeight,
      height: "65%",
      marginHorizontal: 10,
      borderRadius: 30,
      paddingHorizontal: 10,
      paddingVertical: 20,
      minimize: {
        height: "50%",
      },
    },
    divider: {
      backgroundColor: colors.white,
      width: "100%",
      height: 1,
      marginVertical: 10,
    },
    extraInformations: {
      container: {
        height: "30%",
        minimize: {
          gap: 10,
        },
      },
      row: {
        container: {
          height: "50%",
          flexDirection: "row",
          width: "90%",
        },
        content: {
          container: {
            width: "55%",
            alignItems: "center",
            flexDirection: "row",
          },
          icon: {
            width: "30%",
            alignItems: "center",
          },
          description: {
            width: "70%",
            alignItems: "flex-start",
          },
        },
      },
    },
    header: {
      container: {
        height: "10%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      },
      text: [
        baseStyles.text,
        {
          flex:3,
          textAlign:"right",
          fontSize: 16 / fontScale,
          fontWeight: "600",
        },
      ],
    },
    mainContent: {
      container: {
        height: "60%",
        alignItems: "center",
        minimize: {
          flexDirection: "row",
          height: "50%",
        },
      },
      icon: {
        resizeMode: "contain",
        width: "50%",
        height: "50%",
      },
      description: {
        container: {
          alignItems: "center",
          minimize: {
            width: "50%",
          },
        },
        text: [
          baseStyles.text,
          {
            fontSize: 16 / fontScale,
          },
        ],
        temperature: {
          fontWeight: "bold",
        },
      },
    },
    text: [
      baseStyles.text,
      {
        fontSize: 16 / fontScale,
      },
    ],
  });

export default makeStyles;
