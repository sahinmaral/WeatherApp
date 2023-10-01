import { Text, FlatList } from "react-native";
import makeStyles from "./SevenDaysForecastCardList.styles";
import SevenDaysForecastCardItem from "../SevenDaysForecastCardItem";
import useFetch from "../../hooks/useFetch";
import getI18n from "../../locales/i18n";
import { useSelector } from "react-redux";
import { getSettingState } from "../../redux/reducers/settingSlice";
import { useWindowDimensions } from "react-native";

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
    `${process.env.EXPO_PUBLIC_API_URL}/onecall?lat=${location.coordinates.lat}&lon=${location.coordinates.lon}&appid=${process.env.EXPO_PUBLIC_API_KEY}&units=metric&exclude=current,minutely,hourly`
  );

  //FIXME : Bu kisim hata verdiginde herhangi bir hata mesaji gostermemiz gerekir.

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
