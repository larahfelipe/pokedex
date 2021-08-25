import { useCallback, useEffect } from 'react';

import { usePokemons } from '@/hooks/usePokemons';
import Loader from '@/components/shared/Loader';
import PokemonsDashboard from '@/components/base/PokemonsDashboard';

function PokemonsDashboardTemplate() {
  const { getPokemons, isFirstLoad } = usePokemons();

  const hasReachedPageBottom = useCallback(() => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    ) {
      getPokemons();
    }
  }, [getPokemons]);

  useEffect(() => {
    if (isFirstLoad) {
      getPokemons();
    } else {
      window.addEventListener('scroll', hasReachedPageBottom);

      return () => window.removeEventListener('scroll', hasReachedPageBottom);
    }
  }, [isFirstLoad, getPokemons, hasReachedPageBottom]);

  return isFirstLoad ? <Loader fullWidth /> : <PokemonsDashboard />;
}

export default PokemonsDashboardTemplate;
