import { createContext, useContext, useState, useRef, useEffect } from 'react';

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
  const [isAtPageBottom, setIsAtPageBottom] = useState(false);
  const [pokemons, setPokemons] = useState([] as IPokemonEssentials[]);
  const [pokemon, setPokemon] = useState({} as IPokemonParsedStats);
  const renderCount = useRef(50);

  const getPokemons = async () => {
    try {
      setIsLoading(true);

      const { data }: AxiosResponse = await api.get(
        `/pokemon?limit=${renderCount.current}`
      );
      const pokemonsData: IPokemonEssentials[] = data.results;
      console.log(pokemonsData);
      // console.log('isFirstRenderState -> ', isFirstRender);
      console.log(renderCount.current);
      if (pokemons.length) {
        renderCount.current += 50;
        // console.log('AfterIsFirstRenderState -> ', isFirstRender);
      }
      setIsFirstRender(false);
      setPokemons(pokemonsData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getPokemonStatsById = async (id: string | number) => {
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
  };

  useEffect(() => {
    console.log(renderCount.current);
  });

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        isLoading,
        isFirstRender,
        isAtPageBottom,
        setIsAtPageBottom,
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
