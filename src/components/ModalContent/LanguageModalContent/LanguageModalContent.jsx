import { View, TouchableOpacity, Text } from "react-native";
import makeStyles from "../ModalContent.styles";
import { useDispatch, useSelector } from "react-redux";
import Language from "../../../enums/LanguageType";
import {
  updateLanguage,
  getSettingState,
} from "../../../redux/reducers/settingSlice";
import { storeString } from "../../../services/localStorage/react-native-async-storage";
import getI18n from "../../../locales/i18n";
import { useWindowDimensions } from "react-native";

function LanguageModalContent({ toggleModal }) {
  const { language } = useSelector(getSettingState);
  const dispatch = useDispatch();

  const i18n = getI18n(language);

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const handleUpdateLanguage = async (desiredLanguage) => {
    await storeString("language", desiredLanguage);
    dispatch(updateLanguage(desiredLanguage));
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View
        onStartShouldSetResponder={(event) => event.stopPropagation()}
        style={styles.content}
      >
        <TouchableOpacity
          onPress={() => handleUpdateLanguage(Language.English)}
          disabled={language === Language.English}
        >
          <Text
            style={[
              language === Language.English
                ? styles.text.selected
                : styles.text.normal,
            ]}
          >
            {i18n.t(`languages[${Language.English}]`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleUpdateLanguage(Language.Turkish)}
          disabled={language === Language.Turkish}
        >
          <Text
            style={[
              language === Language.Turkish
                ? styles.text.selected
                : styles.text.normal,
            ]}
          >
            {i18n.t(`languages[${Language.Turkish}]`)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LanguageModalContent;
