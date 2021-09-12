import Head from 'next/head';

import MenuBar from '@/components/organisms/MenuBar';
import PokemonsDashboardTemplate from '@/components/templates/PokemonsDashboardTemplate';

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
