import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect
} from 'react';

import { AxiosResponse } from 'axios';

import api from '@/services/api';
import {
  IPokemonProps,
  IPokemonsProviderProps,
  IPokemonEssentials,
  IPokemonParsedStats,
  IPokemonRawStats
} from '@/types';
import parsePokemonData from '@/utils/parsePokemonData';

const PokemonsContext = createContext({} as IPokemonProps);

function PokemonsProvider({ children }: IPokemonsProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [pokemons, setPokemons] = useState([] as IPokemonEssentials[]);
  const [pokemon, setPokemon] = useState({} as IPokemonParsedStats);
  const renderCount = useRef(50);

  const getPokemons = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data }: AxiosResponse<{ results: IPokemonEssentials[] }> =
        await api.get(`/pokemon?limit=${renderCount.current}`);
      const pokemonsData = data.results;

      renderCount.current = pokemonsData.length + 50;
      setPokemons(pokemonsData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsFirstRender(false);
      setIsLoading(false);
    }
  }, []);

  const getPokemonStatsById = useCallback(async (id: string | number) => {
    try {
      setIsLoading(true);
      const { data: pokemonBaseData }: AxiosResponse<IPokemonRawStats> =
        await api.get(`/pokemon/${id}`);
      const { data: pokemonSpecieData }: AxiosResponse<IPokemonRawStats> =
        await api.get(`/pokemon-species/${id}`);
      const parsedPokemonData = parsePokemonData({
        ...pokemonBaseData,
        ...pokemonSpecieData
      });
      setPokemon(parsedPokemonData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <PokemonsContext.Provider
      value={{
        isLoading,
        isFirstRender,
        getPokemons,
        getPokemonStatsById,
        pokemons,
        pokemon
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
