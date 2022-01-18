import { useEffect } from 'react';

import { Flex } from '@chakra-ui/react';

import Loader from '@/components/atoms/Loader';
import PokemonDashboardCard from '@/components/organisms/PokemonDashboardCard';
import { usePokemons } from '@/hooks/usePokemons';

function PokemonsDashboardTemplate() {
  const {
    isFirstRender,
    isAtPageBottom,
    setIsAtPageBottom,
    getPokemons,
    pokemons
  } = usePokemons();

  const onReachPageBottom = () => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    ) {
      console.log('Reached page bottom');
      setIsAtPageBottom(true);
      getPokemons();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onReachPageBottom);

    return () => removeEventListener('scroll', onReachPageBottom);
  }, [isAtPageBottom]);

  return (
    <>
      {isFirstRender ? (
        <Loader fullWidth />
      ) : (
        <Flex pt="3rem" wrap="wrap" justify="center">
          {pokemons.map((pokemon) => {
            return (
              <Flex w="20rem" m="1rem" key={pokemon.name}>
                <PokemonDashboardCard {...pokemon} />
              </Flex>
            );
          })}
        </Flex>
      )}
    </>
  );
}

export default PokemonsDashboardTemplate;
