import { PropsWithChildren } from "react";
import { ViewStyle } from "react-native";

interface FlexPropsBase { 
  direction : ViewStyle['flexDirection'];
  justifyContent? : ViewStyle['justifyContent'];
  alignItems? : ViewStyle['alignItems'];
  wrap?: ViewStyle['flexWrap'];
  flex?: ViewStyle['flex'];
  style?: Omit<ViewStyle, 'flexDirection' | 'justifyContent' | 'alignItems' | 'flexWrap' | 'flex'>;
}

export type FlexProps = PropsWithChildren<FlexPropsBase>;

export type ColumnProps = PropsWithChildren<Omit<FlexPropsBase, 'direction'>>;
export type RowProps = PropsWithChildren<Omit<FlexPropsBase, 'direction'>>;
