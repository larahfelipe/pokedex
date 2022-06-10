import Loader from '@/components/atoms/Loader';
import PokemonsList from '@/components/organisms/PokemonsList';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { usePokemons } from '@/hooks/usePokemons';

function PokemonsDashboardTemplate() {
  const { getPokemons, isFirstRender } = usePokemons();

  useInfiniteScroll(async () => await getPokemons());

  return isFirstRender ? <Loader fullWidth /> : <PokemonsList />;
}

export default PokemonsDashboardTemplate;
