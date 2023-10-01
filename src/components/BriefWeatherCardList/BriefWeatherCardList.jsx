import React from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import makeStyles from "../BriefWeatherCardList/BriefWeatherCardList.styles";
import BriefWeatherCardItem from "../BriefWeatherCardItem";
import { getTodayFormattedDate } from "../../helpers/dateHelper";
import { useSelector } from "react-redux";
import { getSettingState } from "../../redux/reducers/settingSlice";
import getI18n from "../../locales/i18n";

function BriefWeatherCardList({ hourlyWeathers }) {
  const { language } = useSelector(getSettingState);
  const i18n = getI18n(language);

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{getTodayFormattedDate(i18n)}</Text>
      <FlatList
        horizontal={true}
        data={hourlyWeathers}
        renderItem={({ item: weather, index }) => (
          <BriefWeatherCardItem weather={weather} index={index} />
        )}
      />
    </View>
  );
}

export default BriefWeatherCardList;
