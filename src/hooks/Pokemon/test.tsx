import { renderHook, act } from '@testing-library/react-hooks';

import { usePokemons } from './';

jest.mock('@/hooks/Pokemon', () => ({
  usePokemons: jest.fn().mockReturnValue({
    getPokemons: jest.fn().mockReturnValue([
      {
        name: 'Pokemon 1',
        url: 'https://pokeapi.co/api/v2/pokemon/1'
      },
      {
        name: 'Pokemon 2',
        url: 'https://pokeapi.co/api/v2/pokemon/2'
      }
    ]),
    getPokemonStatsById: jest.fn().mockReturnValue({
      name: 'Pokemon 1',
      url: 'https://pokeapi.co/api/v2/pokemon/1',
      pokedexIndex: 1,
      artworkUrl: 'https://artworkurl.com',
      height: 1,
      weight: 1,
      capture_rate: 1,
      gender_rate: 1,
      base_happiness: 1,
      hatch_counter: 1,
      is_legendary: true,
      is_mythical: false,
      stats: [
        {
          base_stat: 1,
          stat: {
            name: 'Stat'
          }
        }
      ],
      types: [
        {
          slot: 1,
          type: {
            name: 'Type name',
            url: 'https://type.com'
          }
        }
      ],
      abilities: [
        {
          ability: {
            name: 'Ability'
          }
        }
      ],
      habitat: {
        name: 'Habitat'
      },
      flavor_text_entries: [
        {
          flavor_text: 'Flavor text',
          language: {
            name: 'Language'
          }
        }
      ]
    })
  })
}));

describe('usePokemons', () => {
  it('should return an array of pokemons after getPokemons', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePokemons());

    await act(async () => {
      await result.current.getPokemons();
    });

    waitForNextUpdate();

    expect(result.current.getPokemons()).toStrictEqual([
      {
        name: 'Pokemon 1',
        url: 'https://pokeapi.co/api/v2/pokemon/1'
      },
      {
        name: 'Pokemon 2',
        url: 'https://pokeapi.co/api/v2/pokemon/2'
      }
    ]);
  });

  it('should throw a new Error after getPokemons', async () => {
    const mockedPost = usePokemons().getPokemons as jest.Mock;

    mockedPost.mockImplementationOnce(() =>
      Promise.reject(
        new Error('Something went wrong while trying to get pokemons')
      )
    );

    const { result } = renderHook(() => usePokemons());

    try {
      await result.current.getPokemons();
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe(
        'Something went wrong while trying to get pokemons'
      );
    }
  });

  it('should return a pokemon object after getPokemonStatsById', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePokemons());

    await act(async () => {
      await result.current.getPokemonStatsById('1');
    });

    waitForNextUpdate();

    expect(result.current.getPokemonStatsById('1')).toStrictEqual({
      name: 'Pokemon 1',
      url: 'https://pokeapi.co/api/v2/pokemon/1',
      pokedexIndex: 1,
      artworkUrl: 'https://artworkurl.com',
      height: 1,
      weight: 1,
      capture_rate: 1,
      gender_rate: 1,
      base_happiness: 1,
      hatch_counter: 1,
      is_legendary: true,
      is_mythical: false,
      stats: [
        {
          base_stat: 1,
          stat: {
            name: 'Stat'
          }
        }
      ],
      types: [
        {
          slot: 1,
          type: {
            name: 'Type name',
            url: 'https://type.com'
          }
        }
      ],
      abilities: [
        {
          ability: {
            name: 'Ability'
          }
        }
      ],
      habitat: {
        name: 'Habitat'
      },
      flavor_text_entries: [
        {
          flavor_text: 'Flavor text',
          language: {
            name: 'Language'
          }
        }
      ]
    });
  });

  it('should throw a new Error after getPokemonStatsById', async () => {
    const mockedPost = usePokemons().getPokemonStatsById as jest.Mock;

    mockedPost.mockImplementationOnce(() =>
      Promise.reject(
        new Error('Something went wrong while trying to get a pokemon stats')
      )
    );

    const { result } = renderHook(() => usePokemons());

    try {
      await result.current.getPokemonStatsById('1');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe(
        'Something went wrong while trying to get a pokemon stats'
      );
    }
  });
});
