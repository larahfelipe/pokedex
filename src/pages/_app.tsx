import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import '@/styles/globals.css';
import MenuBar from '@/components/organisms/MenuBar';
import { PokemonsProvider } from '@/hooks/usePokemons';
import { customTheme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <MenuBar />
      <PokemonsProvider>
        <Component {...pageProps} />
      </PokemonsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
