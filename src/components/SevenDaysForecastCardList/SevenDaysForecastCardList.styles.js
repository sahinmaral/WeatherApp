import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";

const makeBaseStyles = (fontScale) => {
  return {
    text: {
      color: colors.white,
      fontSize: 16 / fontScale,
    }
  }
}

const makeStyles = (fontScale) => {
  const baseStyles = makeBaseStyles(fontScale)

  return StyleSheet.create({
    header: {
      ...baseStyles.text,
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: colors.lightDarkBlue,
      fontWeight: "bold",
    },
    error:{
      container:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.lightDarkBlue,
      },
      text:{
        ...baseStyles.text,
        textAlign:"center"
      }
    }
  })
}


export default makeStyles;
