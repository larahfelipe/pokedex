import PokemonDashboardCard from '@/components/organisms/PokemonDashboardCard';
import { usePokemons } from '@/hooks/usePokemons';

export const PokemonList = () => {
  const { pokemons } = usePokemons();

  return (
    <>
      {pokemons.map((pokemon) => {
        return <PokemonDashboardCard key={pokemon.name} {...pokemon} />;
      })}
    </>
  );
};
