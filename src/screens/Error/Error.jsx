import LottieView from "lottie-react-native";
import { Appearance, useWindowDimensions } from "react-native";
import { View, Text } from "react-native";
import colors from "../../assets/styles/colors";

function Error({ error, i18n }) {
  const { fontScale } = useWindowDimensions();

  const colorScheme = Appearance.getColorScheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: colors.slate,
      }}
    >
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            width: "75%",
            height: "75%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LottieView
            source={require("../../assets/images/error.json")}
            autoPlay
            loop
          />
        </View>
      </View>
      <View style={{ flex: 2, alignItems: "center", paddingHorizontal: 20 }}>
        <Text
          style={{
            marginTop: 50,
            fontSize: 24 / fontScale,
            textAlign: "center",
            fontWeight: "bold",
            color: colorScheme === "light" ? colors.white : colors.black,
          }}
        >
          {!i18n.t(error) ? error : i18n.t(error)}
        </Text>
      </View>
    </View>
  );
}

export default Error;
