import Head from 'next/head';
import { Text } from '@chakra-ui/react';

import NavBar from '@/components/shared/NavBar';

function PokemonPage() {
  return (
    <>
      <Head>
        <title>Pokédex | Find any pokémon you want</title>
      </Head>
      <NavBar />
      <Text pt="70px">Soon...</Text>
    </>
  );
}

export default PokemonPage;
