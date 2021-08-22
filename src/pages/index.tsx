import Head from 'next/head';

import NavBar from '@/components/shared/NavBar';
import PokemonsDashboardTemplate from '@/components/templates/PokemonsDashboard/PokemonsDashboardTemplate';

function Home() {
  return (
    <>
      <Head>
        <title>Pokédex | Find any pokémon you want</title>
      </Head>
      <NavBar />
      <PokemonsDashboardTemplate />
    </>
  );
}

export default Home;
