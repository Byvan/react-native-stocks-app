import { Platform, Dimensions, NativeModules, PixelRatio } from 'react-native'

const {height,width} = Dimensions.get('window');

global.HEIGHT = height;
global.WIDTH = width;
global.IS_IOS = Platform.OS === 'ios';
global.IS_X = Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((height === 812 || width === 812) ||
        (height === 896 || width === 896))
;
global.IS_ANDROID = Platform.OS === 'android';
global.SAFE_BOTTOM = IS_X ? 35 : 0;
global.UNIT = 6;
global.STATUS_BAR_HEIGHT = IS_X ? 44 : IS_IOS ? 20 : 10;
global.LOCALE = IS_IOS ?
  (NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]) :
  NativeModules.I18nManager.localeIdentifier;

