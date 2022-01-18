import Head from 'next/head';

import PokemonsDashboardTemplate from '@/components/templates/PokemonsDashboardTemplate';

function Home() {
  return (
    <>
      <Head>
        <title>Pokédex | Find any pokémon you want</title>
      </Head>
      <PokemonsDashboardTemplate />
    </>
  );
}

export default Home;
