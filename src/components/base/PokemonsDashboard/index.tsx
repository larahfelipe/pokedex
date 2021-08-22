import { Flex } from '@chakra-ui/react';

import { usePokemons } from '@/hooks/Pokemon';
import PokemonBasicCardTemplate from '@/components/templates/PokemonBasicCard/PokemonBasicCardTemplate';

function PokemonsDashboard() {
  const { pokemons } = usePokemons();

  return (
    <Flex pt="3rem" flexWrap="wrap" justifyContent="center">
      {pokemons.map((pokemon, index) => {
        return (
          <Flex w="20rem" m="1rem" key={index}>
            <PokemonBasicCardTemplate {...pokemon} />
          </Flex>
        );
      })}
    </Flex>
  );
}

export default PokemonsDashboard;
