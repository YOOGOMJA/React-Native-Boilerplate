import { StyleProp, ViewProps } from "react-native";

export type SpaceDirection = 'vertical' | 'horizontal';

export interface SpaceProps { 
  size: number;
  direction?: SpaceDirection;
  style?: StyleProp<ViewProps>;
}

