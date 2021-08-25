import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { customTheme } from '@/styles/theme';
import { PokemonsProvider } from '@/hooks/usePokemons';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <PokemonsProvider>
        <Component {...pageProps} />
      </PokemonsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
