import LinearGradient from 'react-native-linear-gradient';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
} from "react-native";
import makeStyles from "./PrivacyPolicy.styles";
import colors from "../../assets/styles/colors";
import Icon from "react-native-remix-icon";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import getI18n from "../../locales/i18n";
import { getSettingState } from "../../redux/reducers/settingSlice";

function PrivacyPolicy({ navigation }) {
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

  return (
    <View style={styles.wrapper}>
      <LinearGradient colors={['#62B8F6', '#2C79C1']} style={styles.container}>
        <View style={styles.header.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left-line" color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.header.text}>{i18n.t("privacyPolicyRow")}</Text>
        </View>
        <ScrollView>
          <Text style={styles.text}>{i18n.t("privacyPolicy.intro")}</Text>
          <Text style={[styles.listHeader, styles.text]}>
            {i18n.t("privacyPolicy.first.header")}
          </Text>
          <Text style={styles.text}>
            {i18n.t("privacyPolicy.first.description")}
          </Text>
          <Text style={[styles.listHeader, styles.text]}>
            {i18n.t("privacyPolicy.second.header")}
          </Text>
          <Text style={styles.text}>
            {i18n.t("privacyPolicy.second.descriptionIntro")}
          </Text>
          <Text style={styles.text}>
            {i18n.t("privacyPolicy.second.description")}
          </Text>
          <Text style={[styles.listHeader, styles.text]}>
            {i18n.t("privacyPolicy.third.header")}
          </Text>
          <Text style={styles.text}>
            {i18n.t("privacyPolicy.third.description")}
          </Text>
          <Text style={[styles.listHeader, styles.text]}>
            {i18n.t("privacyPolicy.forth.header")}
          </Text>
          <Text style={styles.text}>
            {i18n.t("privacyPolicy.forth.description")}
          </Text>
          <Text style={[styles.listHeader, styles.text]}>
            {i18n.t("privacyPolicy.contact.header")}
          </Text>
          <View style={styles.contactUs}>
            <Text style={styles.text}>
              {i18n.t("privacyPolicy.contact.description")}
            </Text>
            <TouchableOpacity
              onPress={() => handlePressLink("mailto:sahin.maral@hotmail.com")}
            >
              <Text style={[styles.link,styles.text]}>sahin.maral@hotmail.com</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

export default PrivacyPolicy;
