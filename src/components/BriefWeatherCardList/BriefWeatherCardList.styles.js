import { StyleSheet } from "react-native";
import colors from '../../assets/styles/colors'

const makeStyles = (fontScale) => StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom:15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.lightDarkBlue,
    width: "100%",
    height: "20%",
  },
  header: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 16/fontScale,
    marginBottom: 10,
  },
});

export default makeStyles