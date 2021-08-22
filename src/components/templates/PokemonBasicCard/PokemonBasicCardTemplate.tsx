import PokemonBasicCard from '@/components/base/PokemonBasicCard';
import { IPokemonEssentials } from '@/types';

function PokemonBasicCardTemplate({ name, url }: IPokemonEssentials) {
  const pokemonDexIndex = +url.split('/')[url.split('/').length - 2];
  const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDexIndex}.png`;

  return <PokemonBasicCard {...{ pokemonDexIndex, artworkUrl, name }} />;
}

export default PokemonBasicCardTemplate;
