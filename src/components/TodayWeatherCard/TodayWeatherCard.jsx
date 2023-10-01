import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-remix-icon";
import makeStyles from "./TodayWeatherCard.styles";
import { getTodayFormattedDate } from "../../helpers/dateHelper";
import { useSelector } from "react-redux";
import { getSettingState } from "../../redux/reducers/settingSlice";
import { useMemo } from "react";
import {
  convertPressure,
  convertTemperature,
  convertWindSpeed,
} from "../../helpers/unitComparisonHelper";
import { showMessage } from "react-native-flash-message";
import getI18n from "../../locales/i18n";

function TodayWeatherCard({
  currentWeather,
  address,
  visibleOf7DaysForecast,
  navigation,
}) {
  const { unit,language } = useSelector(getSettingState);

  const i18n = getI18n(language);

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const fontSizeOfTemperature = useMemo(() => {
    return {
      value: visibleOf7DaysForecast ? 50 / fontScale : 64 / fontScale,
      unit: visibleOf7DaysForecast ? 24 / fontScale : 36 / fontScale,
    };
  }, [visibleOf7DaysForecast]);

  const convertedUnits = useMemo(() => {
    const temperatureValue = convertTemperature(
      unit.temperature,
      currentWeather.main.temp
    );
    const windSpeedValue = convertWindSpeed(
      unit.windSpeed,
      currentWeather.wind.speed
    );
    const pressureValue = convertPressure(
      unit.pressure,
      currentWeather.main.pressure
    );

    return { temperatureValue, windSpeedValue, pressureValue };
  }, [unit]);

  return (
    <LinearGradient
      locations={[0, 1]}
      colors={["#62B8F6", "#2C79C1"]}
      style={[
        styles.container,
        visibleOf7DaysForecast && styles.container.minimize,
      ]}
    >
      <View style={styles.header.container}>
        <TouchableOpacity
          onPress={() => {

            showMessage({
              message: i18n.t("multipleCountryWeatherReportMaintenance"),
              type: "info",
            });
          }}
        >
          <Icon name="add-fill" size="32" color="white" />
        </TouchableOpacity>
        <Text style={styles.header.text}>
          {!address.city ? address.region : address.city} |{" "}
          {address.isoCountryCode}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Icon name="more-2-fill" size="32" color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.mainContent.container,
          visibleOf7DaysForecast && styles.mainContent.container.minimize,
        ]}
      >
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`,
          }}
          style={styles.mainContent.icon}
        />
        <View
          style={[
            styles.mainContent.description.container,
            visibleOf7DaysForecast &&
              styles.mainContent.description.container.minimize,
          ]}
        >
          <Text style={[styles.mainContent.description.text]}>
            {getTodayFormattedDate(i18n)}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                styles.mainContent.description.text,
                styles.mainContent.description.temperature,
                { fontSize: fontSizeOfTemperature.value },
              ]}
            >
              {convertedUnits.temperatureValue}
            </Text>
            <Text
              style={[
                styles.mainContent.description.text,
                { fontSize: fontSizeOfTemperature.unit, marginTop: 5 },
              ]}
            >
              {unit.temperature}
            </Text>
          </View>
          <Text style={[styles.mainContent.description.text]}>
            {i18n.t(`weatherConditions[${currentWeather.weather[0].main}]`)}
          </Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View
        style={[
          styles.extraInformations.container,
          visibleOf7DaysForecast && styles.extraInformations.container.minimize,
        ]}
      >
        <View style={styles.extraInformations.row.container}>
          <View style={styles.extraInformations.row.content.container}>
            <View style={styles.extraInformations.row.content.icon}>
              <Icon name="navigation-fill" size="24" color="white" />
            </View>
            <View style={styles.extraInformations.row.content.description}>
              <Text style={styles.text}>
                {convertedUnits.windSpeedValue} {unit.windSpeed}
              </Text>
              <Text style={styles.text}>{i18n.t("wind")}</Text>
            </View>
          </View>
          <View style={styles.extraInformations.row.content.container}>
            <View style={styles.extraInformations.row.content.icon}>
              <Icon name="showers-line" size="24" color="white" />
            </View>
            <View style={styles.extraInformations.row.content.description}>
              <Text style={styles.text}>{currentWeather.clouds.all}%</Text>
              <Text style={styles.text}>{i18n.t("chanceOfRain")}</Text>
            </View>
          </View>
        </View>
        <View style={styles.extraInformations.row.container}>
          <View style={styles.extraInformations.row.content.container}>
            <View style={styles.extraInformations.row.content.icon}>
              <Icon name="temp-hot-line" size="24" color="white" />
            </View>
            <View style={styles.extraInformations.row.content.description}>
              <Text style={styles.text}>
                {convertedUnits.pressureValue} {unit.pressure}
              </Text>
              <Text style={styles.text}>{i18n.t("pressure")}</Text>
            </View>
          </View>
          <View style={styles.extraInformations.row.content.container}>
            <View style={styles.extraInformations.row.content.icon}>
              <Icon name="contrast-drop-2-line" size="24" color="white" />
            </View>
            <View style={styles.extraInformations.row.content.description}>
              <Text style={styles.text}>{currentWeather.main.humidity}%</Text>
              <Text style={styles.text}>{i18n.t("humidity")}</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default TodayWeatherCard;
