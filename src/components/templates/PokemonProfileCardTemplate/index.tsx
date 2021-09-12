import { useEffect } from 'react';
import { useDisclosure, ScaleFade } from '@chakra-ui/react';

import { usePokemons } from '@/hooks/usePokemons';
import Loader from '@/components/atoms/Loader';
import PokemonProfileCard from '@/components/organisms/PokemonProfileCard';
import { IPokemonProfileCardTemplateProps } from '@/types';

function PokemonProfileCardTemplate({
  pokemonId
}: IPokemonProfileCardTemplateProps) {
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
      <PokemonProfileCard />
    </ScaleFade>
  );
}

export default PokemonProfileCardTemplate;
