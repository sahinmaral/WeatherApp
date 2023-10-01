import { View, TouchableOpacity, Text } from "react-native";
import makeStyles from "../ModalContent.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getSettingState,
  updatePressureUnit,
} from "../../../redux/reducers/settingSlice";
import { PressureUnit } from "../../../enums/UnitType";
import getI18n from "../../../locales/i18n";
import { storeString } from "../../../services/localStorage/react-native-async-storage";
import { useWindowDimensions } from "react-native";

function AtmosphericPressureUnitModalContent({ toggleModal }) {
  const { unit, language } = useSelector(getSettingState);
  const i18n = getI18n(language);

  const dispatch = useDispatch();

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const handleUpdatePressureUnit = async (desiredPressureUnit) => {
    await storeString("pressure", desiredPressureUnit);
    dispatch(updatePressureUnit(desiredPressureUnit));
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View
        onStartShouldSetResponder={(event) => event.stopPropagation()}
        style={styles.content}
      >
        <TouchableOpacity
          disabled={unit.pressure === PressureUnit.Milibars}
          onPress={() => handleUpdatePressureUnit(PressureUnit.Milibars)}
        >
          <Text
            style={[
              unit.pressure === PressureUnit.Milibars
                ? styles.text.selected
                : styles.text.normal,
            ]}
          >
            {i18n.t(`pressureUnits[${PressureUnit.Milibars}]`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={unit.pressure === PressureUnit.StandartAtmosphere}
          onPress={() =>
            handleUpdatePressureUnit(PressureUnit.StandartAtmosphere)
          }
        >
          <Text
            style={[
              unit.pressure === PressureUnit.StandartAtmosphere
                ? styles.text.selected
                : styles.text.normal,
            ]}
          >
            {i18n.t(`pressureUnits[${PressureUnit.StandartAtmosphere}]`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={unit.pressure === PressureUnit.MilimetersOfMercury}
          onPress={() =>
            handleUpdatePressureUnit(PressureUnit.MilimetersOfMercury)
          }
        >
          <Text
            style={[
              unit.pressure === PressureUnit.MilimetersOfMercury
                ? styles.text.selected
                : styles.text.normal,
            ]}
          >
            {i18n.t(`pressureUnits[${PressureUnit.MilimetersOfMercury}]`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={unit.pressure === PressureUnit.HectoPascal}
          onPress={() => handleUpdatePressureUnit(PressureUnit.HectoPascal)}
        >
          <Text
            style={[
              unit.pressure === PressureUnit.HectoPascal
                ? styles.text.selected
                : styles.text.normal,
            ]}
          >
            {i18n.t(`pressureUnits[${PressureUnit.HectoPascal}]`)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AtmosphericPressureUnitModalContent;
