import { View, TouchableOpacity, Text } from "react-native";
import makeStyles from "../ModalContent.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getSettingState,
  updateWindSpeedUnit,
} from "../../../redux/reducers/settingSlice";
import { WindSpeedUnit } from "../../../enums/UnitType";
import getI18n from "../../../locales/i18n";
import { useWindowDimensions } from "react-native";
import { storeString } from "../../../services/localStorage/react-native-async-storage";

function WindSpeedUnitModalContent({ toggleModal }) {
  const { unit, language } = useSelector(getSettingState);
  const i18n = getI18n(language);

  const dispatch = useDispatch();

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const handleUpdateWindSpeedUnit = async (desiredWindSpeedUnit) => {
    await storeString("windSpeed", desiredWindSpeedUnit);
    dispatch(updateWindSpeedUnit(desiredWindSpeedUnit));
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View
        onStartShouldSetResponder={(event) => event.stopPropagation()}
        style={styles.content}
      >
        <TouchableOpacity
          onPress={() =>
            handleUpdateWindSpeedUnit(WindSpeedUnit.KilometersPerHour)
          }
          disabled={unit.windSpeed === WindSpeedUnit.KilometersPerHour}
        >
          <Text
            style={[

              unit.windSpeed === WindSpeedUnit.KilometersPerHour ?
                styles.text.selected : styles.text.normal
            ]}
          >
            {i18n.t(`windSpeedUnits[${WindSpeedUnit.KilometersPerHour}]`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleUpdateWindSpeedUnit(WindSpeedUnit.MilPerHour)}
          disabled={unit.windSpeed === WindSpeedUnit.MilPerHour}
        >
          <Text
            style={[

              unit.windSpeed === WindSpeedUnit.MilPerHour ?
                styles.text.selected : styles.text.normal
            ]}
          >
            {i18n.t(`windSpeedUnits[${WindSpeedUnit.MilPerHour}]`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handleUpdateWindSpeedUnit(WindSpeedUnit.MetersPerSecond)
          }
          disabled={unit.windSpeed === WindSpeedUnit.MetersPerSecond}
        >
          <Text
            style={[

              unit.windSpeed === WindSpeedUnit.MetersPerSecond ?
                styles.text.selected : styles.text.normal
            ]}
          >
            {i18n.t(`windSpeedUnits[${WindSpeedUnit.MetersPerSecond}]`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleUpdateWindSpeedUnit(WindSpeedUnit.FeetPerSecond)}
          disabled={unit.windSpeed === WindSpeedUnit.FeetPerSecond}
        >
          <Text
            style={[

              unit.windSpeed === WindSpeedUnit.FeetPerSecond ?
                styles.text.selected : styles.text.normal
            ]}
          >
            {i18n.t(`windSpeedUnits[${WindSpeedUnit.FeetPerSecond}]`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleUpdateWindSpeedUnit(WindSpeedUnit.Knots)}
          disabled={unit.windSpeed === WindSpeedUnit.Knots}
        >
          <Text
            style={[

              unit.windSpeed === WindSpeedUnit.Knots && styles.text.selected,
            ]}
          >
            {i18n.t(`windSpeedUnits[${WindSpeedUnit.Knots}]`)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WindSpeedUnitModalContent;
