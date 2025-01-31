import { Flex } from "./Flex.component";
import { ColumnProps } from "./Flex.type";

export const Column: React.FC<ColumnProps> = ({ children, justifyContent, alignItems, wrap, flex, style }) => {
  return (
    <Flex 
      direction="column" 
      justifyContent={justifyContent} 
      alignItems={alignItems} 
      wrap={wrap} 
      flex={flex} 
      style={style}>
      {children}
    </Flex>
  );
}