import { Flex, Text } from '@chakra-ui/react';

import { palette } from '@/styles/theme';
import { IPokemonCardProps } from '@/types';

function PokemonDashboardCardName({ children }: IPokemonCardProps) {
  return (
    <Flex
      w="100%"
      h="3rem"
      justify="center"
      align="center"
      bg={palette.lightGray}
    >
      <Text fontWeight="600">{children}</Text>
    </Flex>
  );
}

export default PokemonDashboardCardName;
