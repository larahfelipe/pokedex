import { Flex, Text, Progress } from '@chakra-ui/react';

import { IPokemonProfileCardStatsProgressProps } from '@/types';

function PokemonProfileCardStatsProgress({
  label,
  value,
  colorScheme
}: IPokemonProfileCardStatsProgressProps) {
  return (
    <Flex
      mx="4rem"
      justify="space-between"
      align="center"
      animation="grow-bounce .35s ease-in"
    >
      <Text fontWeight="bold">{label}</Text>
      <Progress
        value={value as number}
        w="md"
        h="1.3rem"
        colorScheme={colorScheme}
        borderRadius="3px"
        hasStripe
        isAnimated
      />
    </Flex>
  );
}

export default PokemonProfileCardStatsProgress;
