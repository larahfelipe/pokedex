import Head from 'next/head';
import { useRouter } from 'next/router';

import MenuBar from '@/components/shared/MenuBar';
import PokemonDetailsCardTemplate from '@/components/templates/PokemonDetailsCard/PokemonDetailsCardTemplate';

function PokemonPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pokédex | Find any pokémon you want</title>
      </Head>
      <MenuBar />
      {!!router.query.pokemonId && (
        <PokemonDetailsCardTemplate
          pokemonId={String(router.query.pokemonId)}
        />
      )}
    </>
  );
}

export default PokemonPage;
