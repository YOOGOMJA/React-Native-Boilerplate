import { useThemeColor } from "@/hooks/useThemeColor";
import { TYPOGRAPHY_VARIANTS } from "../Typography.type";
import { getTypographyStyle } from "../tools/get-typography-style.tool";
import { Colors } from "@/constants/Colors";


export const useTypographyStyle = (variant: keyof typeof TYPOGRAPHY_VARIANTS) => {
  const themedColor = useThemeColor(Colors, variant);

  return getTypographyStyle(variant, themedColor);
}