import { Heading } from '@chakra-ui/react';

import { IPokemonCardProps } from '@/types';

function PokemonProfileCardIndex({ children }: IPokemonCardProps) {
  return (
    <Heading as="h3" size="lg">
      {children}
    </Heading>
  );
}

export default PokemonProfileCardIndex;
