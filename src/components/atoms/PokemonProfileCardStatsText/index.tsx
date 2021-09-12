import { Text } from '@chakra-ui/react';

import { IPokemonProfileCardStatsProps } from '@/types';

function PokemonProfileCardStatsText({
  label,
  value
}: IPokemonProfileCardStatsProps) {
  return (
    <Text>
      <strong>{label}:</strong> {value}
    </Text>
  );
}

export default PokemonProfileCardStatsText;
