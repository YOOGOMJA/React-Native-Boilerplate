/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors : {light : any, dark: any} = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    header1: '#11181C',
    header2: '#11181C',
    header3: '#11181C',
    header4: '#11181C',
    header5: '#11181C',
    subTitle1: '#11181C',
    subTitle2: '#11181C',
    subTitle3: '#11181C',
    body1: '#11181C',
    body2: '#11181C',
    body3: '#11181C',
    body4: '#11181C',
    caption1: '#11181C',
    caption2: '#11181C',
    button: '#11181C',
    link: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    header1: '#ECEDEE',
    header2: '#ECEDEE',
    header3: '#ECEDEE',
    header4: '#ECEDEE',
    header5: '#ECEDEE',
    subTitle1: '#ECEDEE',
    subTitle2: '#ECEDEE',
    subTitle3: '#ECEDEE',
    body1: '#ECEDEE',
    body2: '#ECEDEE',
    body3: '#ECEDEE',
    body4: '#ECEDEE',
    caption1: '#ECEDEE',
    caption2: '#ECEDEE',
    button: '#ECEDEE',
    link: tintColorDark,
  },
} as const;
