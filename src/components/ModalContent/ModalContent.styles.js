import {StyleSheet} from 'react-native';
import colors from '../../assets/styles/colors';

const makeBaseStyles = (fontScale, colorScheme) => {
  return {
    text: {
      fontSize: 16 / fontScale,
      color: colorScheme === 'dark' ? colors.white : colors.black,
    },
  };
};

const makeStyles = (fontScale, colorScheme) => {
  const baseStyle = makeBaseStyles(fontScale, colorScheme);

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor:
        colorScheme === 'dark' ? colors.lightDarkBlue : colors.darkBlue,
      width: '65%',
      gap: 20,
      padding: 20,
      borderRadius: 10,
      alignItems: 'flex-start',
    },
    text: {
      normal: {
        ...baseStyle.text,
      },
      selected: {
        ...baseStyle.text,
        color: colors.red,
        fontWeight: 'bold',
      },
    },
  });
};

export default makeStyles;
