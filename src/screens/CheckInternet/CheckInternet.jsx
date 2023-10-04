import LottieView from "lottie-react-native";
import { Appearance } from "react-native";
import { View, Text } from "react-native";
import colors from "../../assets/styles/colors";

function CheckInternet() {

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
            width: "50%",
            height: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LottieView
            source={require("../../assets/images/check-internet.json")}
            autoPlay
            loop
          />
        </View>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Text
          style={{
            marginTop: 100,
            fontSize: 30,
            textAlign: "center",
            fontWeight: "bold",
            color: colorScheme === "light" ? colors.white : colors.black,
          }}
        >
          Uygulamayı kullanabilmeniz için internet bağlantınızın olması
          gerekmektedir.
        </Text>
      </View>
    </View>
  );
}

export default CheckInternet;
