import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import makeStyles from "../Show7DaysForecastButton/Show7DaysForecastButton.styles";
import Icon from "react-native-remix-icon";
import { useWindowDimensions } from "react-native";
import getI18n from "../../locales/i18n";
import { useSelector } from "react-redux";
import { getSettingState } from "../../redux/reducers/settingSlice";
import colors from "../../assets/styles/colors";

function Show7DaysForecastButton({ setVisibleOf7DaysForecast }) {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const { language } = useSelector(getSettingState);
  const i18n = getI18n(language);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setVisibleOf7DaysForecast(true)}
    >
      <View style={styles.content}>
        <Text style={styles.text}>{i18n.t("forecastFor7Days")}</Text>
        <Icon name="arrow-down-line" size="24" color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

export default Show7DaysForecastButton;
