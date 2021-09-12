import { Flex, Text } from '@chakra-ui/react';

import { palette } from '@/styles/theme';
import { IPokemonCardProps } from '@/types';

function PokemonDashboardCardIndex({ children }: IPokemonCardProps) {
  return (
    <Flex
      w="2.5rem"
      h="1.5rem"
      m="-1px"
      direction="row"
      align="center"
      justify="center"
      position="relative"
      fontWeight="600"
      borderRadius="5px 0 5px 0"
      bg={palette.lightGray}
    >
      <Text>{children}</Text>
    </Flex>
  );
}

export default PokemonDashboardCardIndex;
