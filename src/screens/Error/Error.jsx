import LottieView from 'lottie-react-native';
import {Appearance, useWindowDimensions} from 'react-native';
import {View, Text} from 'react-native';
import colors from '../../assets/styles/colors';

function Error({error}) {
  const {fontScale} = useWindowDimensions();

  const colorScheme = Appearance.getColorScheme();

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
            source={require('../../assets/images/error.json')}
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
        {error}
      </Text>
    </View>
  );
}

export default Error;
