import { View } from "react-native";
import { SpaceProps } from "./Space.type";

export const Space : React.FC<SpaceProps>  = ({size, direction = 'vertical', style}) => { 
  return <View style={[direction === 'vertical' ? {height: size} : {width: size}, style]} />;  
};