import { useMemo } from "react";
import { Text, View, Image } from "react-native";
import makeStyles from "../BriefWeatherCardItem/BriefWeatherCardItem.styles";
import { useSelector } from "react-redux";
import { getSettingState } from "../../redux/reducers/settingSlice";
import { convertTemperature } from "../../helpers/unitComparisonHelper";
import { useWindowDimensions } from "react-native";
import getI18n from "../../locales/i18n";

function BriefWeatherCardItem({ weather, index }) {

  const { unit,language } = useSelector(getSettingState);

  const i18n = getI18n(language);

  const hoursOfDate = useMemo(() => {
    const date = new Date(weather.dt_txt);
    const hour = date.getHours();

    if (index === 0) {
      return i18n.t("currentDay");
    } else {
      if (hour % 10 === hour) {
        return `0${hour}`;
      } else {
        return hour;
      }
    }
  }, [weather,language]);

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const convertedUnits = useMemo(() => {
    const temperatureMinValue = convertTemperature(
      unit.temperature,
      weather.main.temp_min
    );

    const temperatureMaxValue = convertTemperature(
      unit.temperature,
      weather.main.temp_max
    );

    return { temperatureMinValue, temperatureMaxValue };
  }, [unit.temperature]);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>{hoursOfDate}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
        }}
        style={{ width: 32, height: 32 }}
      />
      <Text style={[styles.text, styles.temp]}>
        {convertedUnits.temperatureMinValue}° /{" "}
        {convertedUnits.temperatureMaxValue}°
      </Text>
      <Text style={[styles.text, styles.rain]}>{weather.clouds.all}% {i18n.t("rain")}</Text>
    </View>
  );
}

export default BriefWeatherCardItem;
