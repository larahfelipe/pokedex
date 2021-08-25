import PokemonBasicCard from '@/components/base/PokemonBasicCard';
import { IPokemonEssentials } from '@/types';

function PokemonBasicCardTemplate({ name, url }: IPokemonEssentials) {
  const pokemonDexIdx = +url.split('/')[url.split('/').length - 2];
  const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDexIdx}.png`;
  const pokemonEssentialData: IPokemonEssentials = {
    name,
    url,
    pokemonDexIdx,
    artworkUrl
  };

  return <PokemonBasicCard {...pokemonEssentialData} />;
}

export default PokemonBasicCardTemplate;
