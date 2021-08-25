import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback
} from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

import parsePokemonData from '@/utils/parsePokemonData';
import {
  IPokemonEssentials,
  IPokemonRawStats,
  IPokemonParsedStats,
  IPokemonProps,
  IPokemonsProviderProps
} from '@/types';

export const PokemonsContext = createContext({} as IPokemonProps);

function PokemonsProvider({ children }: IPokemonsProviderProps) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([] as IPokemonEssentials[]);
  const [pokemon, setPokemon] = useState({} as IPokemonParsedStats);
  const renderCount = useRef(80);

  const getPokemons = useCallback(async () => {
    setIsLoading(true);
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${renderCount.current}`)
      .then((res: AxiosResponse) => {
        const pokemonsPayload: IPokemonEssentials[] = res.data.results;
        setPokemons(pokemonsPayload);
        renderCount.current += 80;
      })
      .catch((err: AxiosError) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
        setIsFirstLoad(false);
      });
  }, []);

  const getPokemonStatsById = useCallback(async (id: string | number) => {
    setIsLoading(true);
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(async ({ data: baseData }: AxiosResponse<IPokemonRawStats>) => {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
          .then(({ data: specieData }: AxiosResponse<IPokemonRawStats>) => {
            const parsedPokemonStats = parsePokemonData({
              ...baseData,
              ...specieData
            });
            setPokemon(parsedPokemonStats);
          })
          .catch((err: AxiosError) => {
            throw err;
          });
      })
      .catch((err: AxiosError) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
        setIsFirstLoad(false);
      });
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        pokemon,
        getPokemons,
        getPokemonStatsById,
        isFirstLoad,
        isLoading
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}

function usePokemons() {
  const context = useContext(PokemonsContext);

  return context;
}

export { PokemonsProvider, usePokemons };
