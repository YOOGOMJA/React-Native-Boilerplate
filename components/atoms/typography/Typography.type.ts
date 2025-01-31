import { ThemeColor } from "@/types";
import { TextProps } from "react-native";

export const TYPOGRAPHY_VARIANTS = {
  'header1': 'header1',
  'header2': 'header2',
  'header3': 'header3',
  'header4': 'header4',
  'header5': 'header5',
  'subTitle1': 'subTitle1',
  'subTitle2': 'subTitle2',
  'subTitle3': 'subTitle3',
  'body1': 'body1',
  'body2': 'body2',
  'body3': 'body3',
  'body4': 'body4',
  'caption1': 'caption1',
  'caption2': 'caption2',
  'button': 'button',
  'link': 'link',
} as const;

interface TypographyPropsBase { 
  variant? : keyof typeof TYPOGRAPHY_VARIANTS;
  bold?: boolean;
}

export type TypographyProps = TypographyPropsBase & TextProps;