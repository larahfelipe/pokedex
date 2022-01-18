import { useCallback, useEffect } from 'react';

import Loader from '@/components/atoms/Loader';
import PokemonsList from '@/components/organisms/PokemonsList';
import { usePokemons } from '@/hooks/usePokemons';

function PokemonsDashboardTemplate() {
  const { getPokemons, isFirstRender } = usePokemons();

  const onApproxPageBottom = useCallback(() => {
    let isWaiting = false;
    const scrollPosition = window.scrollY;
    const windowHeight = document.body.offsetHeight - window.innerHeight;

    if (scrollPosition > windowHeight * 0.75 && !isWaiting) {
      getPokemons();
      isWaiting = true;

      setTimeout(() => {
        isWaiting = false;
      }, 500);
    }
  }, [getPokemons]);

  useEffect(() => {
    window.addEventListener('wheel', onApproxPageBottom);
    window.addEventListener('scroll', onApproxPageBottom);

    return () => {
      window.removeEventListener('wheel', onApproxPageBottom);
      window.removeEventListener('scroll', onApproxPageBottom);
    };
  }, [onApproxPageBottom]);

  return isFirstRender ? <Loader fullWidth /> : <PokemonsList />;
}

export default PokemonsDashboardTemplate;
