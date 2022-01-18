import Head from 'next/head';
import { useRouter } from 'next/router';

import PokemonProfileCardTemplate from '@/components/templates/PokemonProfileCardTemplate';

function PokemonPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pokédex | Find any pokémon you want</title>
      </Head>
      {!!router.query.pokemonId && (
        <PokemonProfileCardTemplate
          pokemonId={String(router.query.pokemonId)}
        />
      )}
    </>
  );
}

export default PokemonPage;
