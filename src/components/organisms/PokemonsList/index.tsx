import { Flex } from '@chakra-ui/react';

import PokemonDashboardCard from '@/components/organisms/PokemonDashboardCard';
import { usePokemons } from '@/hooks/usePokemons';

function PokemonsList() {
  const { pokemons } = usePokemons();

  return (
    <Flex pt="3rem" wrap="wrap" justify="center">
      {pokemons.map((pokemon) => {
        return <PokemonDashboardCard key={pokemon.name} {...pokemon} />;
      })}
    </Flex>
  );
}

export default PokemonsList;
