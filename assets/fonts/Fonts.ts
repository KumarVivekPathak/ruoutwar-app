import * as Font from 'expo-font';

export const loadFonts = async () => {
  return Font.loadAsync({
    'Manrope-Regular': require('./Manrope/Manrope-Regular.ttf'),
    'Manrope-Bold': require('./Manrope/Manrope-Bold.ttf'),
    'Roboto-Regular': require('./Roboto/Roboto_Condensed-Regular.ttf'),
    'Roboto-Bold': require('./Roboto/Roboto_Condensed-Bold.ttf'),
  });
};
