import { Flex, Image } from '@chakra-ui/react';

import { IPokemonCardArtworkProps } from '@/types';

function PokemonProfileCardArtwork({ artworkUrl }: IPokemonCardArtworkProps) {
  return (
    <Flex w="30%" justify="flex-end" align="center">
      <Image src={artworkUrl} alt="" maxW="90%" />
    </Flex>
  );
}

export default PokemonProfileCardArtwork;
