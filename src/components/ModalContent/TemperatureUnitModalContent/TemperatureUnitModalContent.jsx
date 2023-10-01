import { View, TouchableOpacity, Text } from "react-native";
import makeStyles from "../ModalContent.styles";
import { useDispatch, useSelector } from "react-redux";
import { TemperatureUnit } from "../../../enums/UnitType";
import {
  updateTemperatureUnit,
  getSettingState,
} from "../../../redux/reducers/settingSlice";
import getI18n from "../../../locales/i18n";
import { storeString } from "../../../services/localStorage/react-native-async-storage";
import { useWindowDimensions } from "react-native";

function TemperatureUnitModalContent({ toggleModal }) {
  const { unit, language } = useSelector(getSettingState);
  const i18n = getI18n(language);

  const dispatch = useDispatch();

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const handleUpdateTemperatureUnit = async (desiredTemperatureUnit) => {
    await storeString("temperature", desiredTemperatureUnit);
    dispatch(updateTemperatureUnit(desiredTemperatureUnit));
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View
        onStartShouldSetResponder={(event) => event.stopPropagation()}
        style={styles.content}
      >
        <TouchableOpacity
          onPress={() => handleUpdateTemperatureUnit(TemperatureUnit.Celcius)}
          disabled={unit.temperature === TemperatureUnit.Celcius}
        >
          <Text
            style={[
              unit.temperature === TemperatureUnit.Celcius
                ? styles.text.selected
                : styles.text.normal,
            ]}
          >
            {i18n.t(`temperatureUnits[${TemperatureUnit.Celcius}]`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handleUpdateTemperatureUnit(TemperatureUnit.Fahrenheit)
          }
          disabled={unit.temperature === TemperatureUnit.Fahrenheit}
        >
          <Text
            style={[
              unit.temperature === TemperatureUnit.Fahrenheit
                ? styles.text.selected
                : styles.text.normal,
            ]}
          >
            {i18n.t(`temperatureUnits[${TemperatureUnit.Fahrenheit}]`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleUpdateTemperatureUnit(TemperatureUnit.Kelvin)}
          disabled={unit.temperature === TemperatureUnit.Kelvin}
        >
          <Text
            style={[
              unit.temperature === TemperatureUnit.Kelvin
                ? styles.text.selected
                : styles.text.normal,
            ]}
          >
            {i18n.t(`temperatureUnits[${TemperatureUnit.Kelvin}]`)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TemperatureUnitModalContent;
