import { View } from 'react-native';
import { FlexProps } from './Flex.type'

export const Flex: React.FC<FlexProps> = ({ children, direction, justifyContent, alignItems, wrap, flex, style }) => {
  return (
    <View style={[{ flexDirection: direction, justifyContent, alignItems, flexWrap: wrap, flex }, style]}>
      {children}
    </View>
  );
}