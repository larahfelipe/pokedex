import { ReactNode } from 'react';

export interface IPokemonsProviderProps {
  children: ReactNode;
}

export interface IPokemonProps {
  pokemons: IPokemonEssentials[];
  pokemon: IPokemonParsedStats;
  getPokemons: () => Promise<void>;
  getPokemonStatsById: (id: string | number) => Promise<void>;
  isFirstLoad: boolean;
  isLoading: boolean;
}

export interface IPokemonEssentials {
  name: string;
  url: string;
  pokemonDexIdx: number;
  artworkUrl: string;
}

export interface IPokemonRawStats extends IPokemonEssentials {
  height: number;
  weight: number;
  capture_rate: number;
  gender_rate: number;
  base_happiness: number;
  hatch_counter: number;
  is_legendary: boolean;
  is_mythical: boolean;
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  habitat: {
    name: string;
  };
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
      };
    }
  ];
}

export interface IPokemonParsedStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  specialAttack: number;
  specialDefense: number;
  types: string[];
  abilities: string[];
  height: number;
  weight: number;
  genderRatioFemale: number;
  genderRatioMale: number;
  flavorTextFiltered: any;
  captureRate: number;
  isLegendary: boolean;
  isMythical: boolean;
  hatchCounter: number;
  baseHappiness: number;
  habitat: string;
}
