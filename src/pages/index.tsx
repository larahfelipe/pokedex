import Head from 'next/head';

import MenuBar from '@/components/shared/MenuBar';
import PokemonsDashboardTemplate from '@/components/templates/PokemonsDashboard/PokemonsDashboardTemplate';

function Home() {
  return (
    <>
      <Head>
        <title>Pokédex | Find any pokémon you want</title>
      </Head>
      <MenuBar />
      <PokemonsDashboardTemplate />
    </>
  );
}

export default Home;
