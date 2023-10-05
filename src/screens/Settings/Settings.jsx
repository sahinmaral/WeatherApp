import {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import makeStyles from './Settings.styles';
import baseStyles from '../../assets/styles/baseStyles';
import Icon from 'react-native-remix-icon';
import colors from '../../assets/styles/colors';
import CustomModal from '../../components/CustomModal/CustomModal';
import SettingsModalContentType from '../../enums/SettingsModalContentType';
import TemperatureUnitModalContent from '../../components/ModalContent/TemperatureUnitModalContent';
import WindSpeedUnitModalContent from '../../components/ModalContent/WindSpeedUnitModalContent';
import AtmosphericPressureUnitModalContent from '../../components/ModalContent/AtmosphericPressureUnitModalContent';
import LanguageModalContent from '../../components/ModalContent/LanguageModalContent';
import {useSelector} from 'react-redux';
import {getSettingState} from '../../redux/reducers/settingSlice';
import {useWindowDimensions} from 'react-native';
import getI18n from '../../locales/i18n';

function Settings({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContentType, setModalContentType] = useState(
    SettingsModalContentType.NotDefined,
  );

  const {unit, language} = useSelector(getSettingState);
  const i18n = getI18n(language);

  const {fontScale} = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const renderSettingsModalContent = useCallback(() => {
    switch (modalContentType) {
      case SettingsModalContentType.Temperature:
        return <TemperatureUnitModalContent toggleModal={toggleModal} />;
      case SettingsModalContentType.WindSpeed:
        return <WindSpeedUnitModalContent toggleModal={toggleModal} />;
      case SettingsModalContentType.AtmosphericPressure:
        return (
          <AtmosphericPressureUnitModalContent toggleModal={toggleModal} />
        );
      case SettingsModalContentType.Language:
        return <LanguageModalContent toggleModal={toggleModal} />;
      default:
        return null;
    }
  }, [modalContentType]);

  const handleModalOpen = modalContentType => {
    setModalContentType(modalContentType);
    setModalVisible(true);
  };

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        locations={[0, 1]}
        colors={['#62B8F6', '#2C79C1']}
        style={[styles.container]}>
        <CustomModal toggleModal={toggleModal} modalVisible={modalVisible}>
          {renderSettingsModalContent()}
        </CustomModal>
        <View style={styles.header.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left-line" color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.header.text}>{i18n.t('settingsHeader')}</Text>
        </View>
        <View style={styles.section.container}>
          <Text style={[baseStyles.text, styles.section.header]}>
            {i18n.t('unitSectionHeader')}
          </Text>
          <View style={styles.section.row.container}>
            <Text style={[baseStyles.text, styles.section.row.text]}>
              {i18n.t('temperatureUnitRow')}
            </Text>
            <TouchableOpacity
              style={styles.button.main}
              onPress={() =>
                handleModalOpen(SettingsModalContentType.Temperature)
              }>
              <Text style={[baseStyles.text, styles.section.row.text]}>
                {unit.temperature}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section.row.container}>
            <Text style={[baseStyles.text, styles.section.row.text]}>
              {i18n.t('windSpeedUnitRow')}
            </Text>
            <TouchableOpacity
              style={styles.button.main}
              onPress={() =>
                handleModalOpen(SettingsModalContentType.WindSpeed)
              }>
              <Text style={[baseStyles.text, styles.section.row.text]}>
                {unit.windSpeed}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section.row.container}>
            <Text style={[baseStyles.text, styles.section.row.text]}>
              {i18n.t('atmosphericPressureUnitRow')}
            </Text>
            <TouchableOpacity
              style={styles.button.main}
              onPress={() =>
                handleModalOpen(SettingsModalContentType.AtmosphericPressure)
              }>
              <Text style={[baseStyles.text, styles.section.row.text]}>
                {unit.pressure}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.section.container}>
          <Text style={[baseStyles.text, styles.section.header]}>
            {i18n.t('applicationSettingsSectionHeader')}
          </Text>
          <View style={styles.section.row.container}>
            <Text style={[baseStyles.text, styles.section.row.text]}>
              {i18n.t('languageRow')}
            </Text>
            <TouchableOpacity
              style={styles.button.main}
              onPress={() =>
                handleModalOpen(SettingsModalContentType.Language)
              }>
              <Text style={[baseStyles.text, styles.section.row.text]}>
                {language}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.extra.container}>
          <Text style={[baseStyles.text, styles.extra.header]}>
            {i18n.t('extraSectionHeader')}
          </Text>
          <TouchableOpacity
            style={styles.button.extra}
            onPress={() => navigation.navigate('About')}>
            <Text style={[baseStyles.text, styles.extra.text]}>
              {' '}
              {i18n.t('aboutRow')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button.extra}
            onPress={() => {
              navigation.navigate('PrivacyPolicy');
            }}>
            <Text style={[baseStyles.text, styles.extra.text]}>
              {i18n.t('privacyPolicyRow')}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

export default Settings;
