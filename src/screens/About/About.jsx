import { LinearGradient } from "expo-linear-gradient";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
} from "react-native";
import makeStyles from "./About.styles";
import colors from "../../assets/styles/colors";
import Icon from "react-native-remix-icon";
import baseStyles from "../../assets/styles/baseStyles";
import { useCallback } from "react";
import uuid from "react-native-uuid";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import getI18n from "../../locales/i18n";
import { getSettingState } from "../../redux/reducers/settingSlice";

function About({ navigation }) {
  const handlePressLink = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }, []);

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const { language } = useSelector(getSettingState);
  const i18n = getI18n(language);

  const featureAllRows = useMemo(() => {
    const {
      currentWeatherRow,
      hourlyForecast,
      dailyForecast,
      locationSearch,
      userSettings,
    } = Object(i18n.t("featuresRow"));

    return [
      currentWeatherRow,
      hourlyForecast,
      dailyForecast,
      locationSearch,
      userSettings,
    ];
  }, [i18n.locale]);

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        locations={[0, 1]}
        colors={["#62B8F6", "#2C79C1"]}
        style={styles.container}
      >
        <View style={styles.header.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left-line" color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.header.text}>{i18n.t("aboutRow")}</Text>
        </View>
        <ScrollView>
          <Text style={[baseStyles.text, styles.about.list.header]}>
            {i18n.t("featuresRow.header")}
          </Text>

          {featureAllRows.map((row, index) => {
            return (
              <View style={styles.feature.row.container} key={uuid.v4()}>
                <Text style={[baseStyles.text, styles.feature.header]}>
                  {index + 1}. {row.header}
                </Text>
                <View style={styles.feature.list.container}>
                  {row.items.map((item) => {
                    return (
                      <View style={styles.feature.list.row} key={uuid.v4()}>
                        <Text style={[baseStyles.text, styles.text]}>•</Text>
                        <Text style={[baseStyles.text, styles.text]}>
                          {item}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}

          <Text style={[baseStyles.text, styles.about.list.header]}>
            {i18n.t("authorRow.header")}
          </Text>
          <View style={styles.author.container}>
            <Text style={[baseStyles.text, styles.text]}>
              {i18n.t("authorRow.content")}
            </Text>
            <View style={styles.author.link.container}>
              <Text style={[baseStyles.text, styles.text]}>Linkedin: </Text>
              <TouchableOpacity
                onPress={() =>
                  handlePressLink("https://www.linkedin.com/in/sahinmaral")
                }
              >
                <Text
                  style={[
                    styles.text,
                    baseStyles.text,
                    styles.author.link.text,
                  ]}
                >
                  sahinnmaral
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.author.link.container}>
              <Text style={[baseStyles.text, styles.text]}>Github: </Text>
              <TouchableOpacity
                onPress={() =>
                  handlePressLink("https://www.github.com/sahinmaral")
                }
              >
                <Text
                  style={[
                    styles.text,
                    baseStyles.text,
                    styles.author.link.text,
                  ]}
                >
                  sahinnmaral
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.author.link.container}>
              <Text style={[baseStyles.text, styles.text]}>Email: </Text>
              <TouchableOpacity
                onPress={() =>
                  handlePressLink("mailto:sahin.maral@hotmail.com")
                }
              >
                <Text
                  style={[
                    styles.text,
                    baseStyles.text,
                    styles.author.link.text,
                  ]}
                >
                  sahin.maral@hotmail.com
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

export default About;
