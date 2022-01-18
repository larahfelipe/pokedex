import { useCallback, useEffect } from 'react';

import { Flex } from '@chakra-ui/react';
import debounce from 'lodash.debounce';

import Loader from '@/components/atoms/Loader';
import { usePokemons } from '@/hooks/usePokemons';

import { PokemonList } from './components/PokemonList';

function PokemonsDashboardTemplate() {
  const { getPokemons, isFirstRender } = usePokemons();

  const onReachPageBottom = useCallback(() => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    ) {
      getPokemons();
    }
  }, [getPokemons]);

  useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

      if (scroll > height * 0.75 && !wait) {
        getPokemons();

        wait = true;

        setTimeout(() => {
          wait = false;
        }, 500);
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [getPokemons]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <>
      {isFirstRender ? (
        <Loader fullWidth />
      ) : (
        <Flex pt="3rem" wrap="wrap" justify="center">
          <PokemonList />
        </Flex>
      )}
    </>
  );
}

export default PokemonsDashboardTemplate;
