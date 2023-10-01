import { Text, View, Image } from "react-native";
import makeStyles from "./SevenDaysForecastCardItem.styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getSettingState } from "../../redux/reducers/settingSlice";
import { convertTemperature } from "../../helpers/unitComparisonHelper";
import { useWindowDimensions } from "react-native";
import getI18n from "../../locales/i18n";

function SevenDaysForecastCardItem({ weather }) {
  const { unit, language } = useSelector(getSettingState);

  const i18n = getI18n(language);

  const dayNameOfDate = useMemo(() => {
    const date = new Date(weather.dt * 1000);

    var options = { weekday: "short" };
    return new Intl.DateTimeFormat(i18n.locale, options).format(date);
  }, [weather]);

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const convertedUnits = useMemo(() => {
    const temperatureMinValue = convertTemperature(
      unit.temperature,
      weather.temp.min
    );

    const temperatureMaxValue = convertTemperature(
      unit.temperature,
      weather.temp.max
    );

    return { temperatureMinValue, temperatureMaxValue };
  }, [unit.temperature]);

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{dayNameOfDate}</Text>
      <View style={styles.rainAndIcon.container}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
          }}
          style={{ width: 40, height: 40 }}
        />
        {weather.rain ? (
          <Text style={styles.rainAndIcon.rain}>
            {weather.rain.toFixed(2)}% {i18n.t("rain")}
          </Text>
        ) : (
          <Text style={styles.rainAndIcon.rain}>
            {i18n.t("rainDoesntKnown")}
          </Text>
        )}
      </View>
      <Text style={styles.temperature}>
        {convertedUnits.temperatureMinValue}° /{" "}
        {convertedUnits.temperatureMaxValue}°
      </Text>
    </View>
  );
}

export default SevenDaysForecastCardItem;
