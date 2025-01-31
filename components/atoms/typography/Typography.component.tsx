import { useTypographyStyle } from './hooks/useTypographyStyle.hook';
import {  TypographyProps } from './Typography.type';
import { Text } from 'react-native';

export const Typography: React.FC<TypographyProps> = ({ variant = 'body1', bold = false, style, ...rest }) => {
  const typographyStyle  = useTypographyStyle(variant);

  return (
    <Text
      style={[typographyStyle, bold ? {
        fontWeight: 'bold',
      } : { }, style]}
      {...rest}
    />
  );
}