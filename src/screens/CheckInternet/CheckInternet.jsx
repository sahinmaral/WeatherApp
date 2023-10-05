import LottieView from 'lottie-react-native';
import {Appearance, useWindowDimensions, View, Text} from 'react-native';
import colors from '../../assets/styles/colors';

function CheckInternet({i18n}) {
  const colorScheme = Appearance.getColorScheme();

  const {fontScale} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: colors.slate,
      }}>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'flex-end'}}>
        <View
          style={{
            width: '75%',
            height: '75%',
          }}>
          <LottieView
            style={{flex: 1}}
            source={require('../../assets/images/check-internet.json')}
            autoPlay
            loop
          />
        </View>
      </View>
      <Text
        style={{
          flex: 1,
          fontSize: 24 / fontScale,
          marginTop: 50,
          textAlign: 'center',
          fontWeight: 'bold',
          color: colorScheme === 'light' ? colors.black : colors.white,
        }}>
        {i18n.t('noInternetConnection')}
      </Text>
    </View>
  );
}

export default CheckInternet;
