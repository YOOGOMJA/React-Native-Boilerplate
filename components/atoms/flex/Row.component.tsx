import { Flex } from "./Flex.component";
import { RowProps } from "./Flex.type";

export const Row: React.FC<RowProps> = ({ children, justifyContent, alignItems, wrap, flex, style }) => {
  return (
    <Flex 
      direction="row" 
      justifyContent={justifyContent} 
      alignItems={alignItems} 
      wrap={wrap} 
      flex={flex} 
      style={style}>
      {children}
    </Flex>
  );
}