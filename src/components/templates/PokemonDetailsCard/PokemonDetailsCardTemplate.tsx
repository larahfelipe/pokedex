import { useEffect } from 'react';
import { useDisclosure, ScaleFade } from '@chakra-ui/react';

import { usePokemons } from '@/hooks/usePokemons';
import Loader from '@/components/shared/Loader';
import PokemonDetailsCard from '@/components/base/PokemonDetailsCard';
import { IPokemonDetailsCardTemplateProps } from '@/types';

function PokemonDetailsCardTemplate({
  pokemonId
}: IPokemonDetailsCardTemplateProps) {
  const { isOpen, onToggle } = useDisclosure();
  const { getPokemonStatsById, isLoading } = usePokemons();

  useEffect(() => {
    getPokemonStatsById(pokemonId);
    if (!isOpen) {
      setTimeout(() => {
        onToggle();
      }, 500);
    }
  }, [getPokemonStatsById, pokemonId, isOpen, onToggle]);

  return isLoading ? (
    <Loader fullWidth />
  ) : (
    <ScaleFade in={isOpen} initialScale={0.9}>
      <PokemonDetailsCard />
    </ScaleFade>
  );
}

export default PokemonDetailsCardTemplate;
