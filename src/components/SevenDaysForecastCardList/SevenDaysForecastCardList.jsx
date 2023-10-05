import { Text, FlatList } from "react-native";
import makeStyles from "./SevenDaysForecastCardList.styles";
import SevenDaysForecastCardItem from "../SevenDaysForecastCardItem";
import useFetch from "../../hooks/useFetch";
import getI18n from "../../locales/i18n";
import { useSelector } from "react-redux";
import { getSettingState } from "../../redux/reducers/settingSlice";
import { useWindowDimensions } from "react-native";
import { View } from "react-native";
import {
  WEATHER_API_URL,
  WEATHER_API_KEY,
} from '@env';

function SevenDaysForecastCardList({ location }) {
  const { language } = useSelector(getSettingState);
  const i18n = getI18n(language);

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const {
    loading,
    error,
    data: sevenDaysWeathers,
  } = useFetch(
    `${WEATHER_API_URL}/onecall?lat=${location.coordinates.latitude}&lon=${location.coordinates.longitude}&appid=${WEATHER_API_KEY}&units=metric&exclude=current,minutely,hourly`
  );

  if (!loading && error) {
    return (
      <View style={styles.error.container}>
        <Text style={styles.error.text}>{i18n.t("networkError")}</Text>
      </View>
    );
  }

  if (!loading && !error) {
    return (
      <FlatList
        ListHeaderComponent={
          <Text style={styles.header}>{i18n.t("forecastFor7Days")}</Text>
        }
        data={sevenDaysWeathers.daily}
        renderItem={({ item: weather }) => (
          <SevenDaysForecastCardItem weather={weather} />
        )}
      />
    );
  }
}

export default SevenDaysForecastCardList;
