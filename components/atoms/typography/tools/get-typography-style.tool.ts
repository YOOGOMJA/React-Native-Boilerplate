import { TextStyle } from "react-native";
import { TYPOGRAPHY_VARIANTS } from "../Typography.type";

export const getTypographyStyle = (variant: keyof typeof TYPOGRAPHY_VARIANTS, color: string) : TextStyle => {
  switch (variant) {
    case 'header1':
      return {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
        color,
      };
    case 'header2':
      return {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 28,
        color,
      };
    case 'header3':
      return {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24,
        color,
      };
    case 'header4':
      return {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        color,
      };
    case 'header5':
      return {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        color,
      };
    case 'subTitle1':
      return {
        fontSize: 20,
        lineHeight: 24,
        color,
      };
    case 'subTitle2':
      return {
        fontSize: 18,
        lineHeight: 22,
        color,
      };
    case 'subTitle3':
      return {
        fontSize: 16,
        lineHeight: 20,
        color,
      };
    case 'body1':
      return {
        fontSize: 16,
        lineHeight: 24,
        color,
      };
    case 'body2':
      return {
        fontSize: 14,
        lineHeight: 20,
        color,
      };
    case 'body3':
      return {
        fontSize: 12,
        lineHeight: 16,
        color,
      };
    case 'body4':
      return {
        fontSize: 10,
        lineHeight: 14,
        color,
      };
    case 'caption1':
      return {
        fontSize: 12,
        lineHeight: 16,
        color,
      };
    case 'caption2':
      return {
        fontSize: 10,
        lineHeight: 14,
        color,
      };
    case 'button':
      return {
        fontSize: 16,
        lineHeight: 24,
        color,
      };
    case 'link':
      return {
        fontSize: 16,
        lineHeight: 30,
        color: '#0a7ea4',
      };
    default:
      return {
        fontSize: 16,
        lineHeight: 24,
        color,
      };
  }
}

