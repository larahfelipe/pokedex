import { IPokemonRawStats, IPokemonParsedStats } from '@/types';

export default function parsePokemonData({
  name: rawName,
  id: dexIndex,
  stats,
  types: rawTypes,
  abilities: rawAbilities,
  height: rawHeight,
  weight: rawWeight,
  gender_rate,
  capture_rate: captureRate,
  is_legendary: isLegendary,
  is_mythical: isMythical,
  hatch_counter: hatchCounter,
  base_happiness: baseHappiness,
  base_experience: baseExperience,
  habitat: rawHabitat
}: IPokemonRawStats) {
  const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  let hp = 0;
  let attack = 0;
  let defense = 0;
  let speed = 0;
  let specialAttack = 0;
  let specialDefense = 0;
  const name = rawName.toUpperCase();
  const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexIndex}.png`;
  const weight = Math.round((rawWeight * 0.220462 + 0.00001) * 100) / 100;
  const height = Math.round((rawHeight * 0.328084 + 0.00001) * 100) / 100;
  const habitat = capitalizeFirstLetter(rawHabitat.name);
  const genderRatioFemale = 12.5 * gender_rate;
  const genderRatioMale = 12.5 * (8 - gender_rate);

  const types = rawTypes.map(({ type }) => {
    return capitalizeFirstLetter(type.name);
  });

  const abilities = rawAbilities.map((ability) => {
    return ability.ability.name
      .toLowerCase()
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  });

  stats.forEach((stat) => {
    switch (stat.stat.name) {
      case 'hp':
        hp = stat['base_stat'];
        break;
      case 'attack':
        attack = stat['base_stat'];
        break;
      case 'defense':
        defense = stat['base_stat'];
        break;
      case 'speed':
        speed = stat['base_stat'];
        break;
      case 'special-attack':
        specialAttack = stat['base_stat'];
        break;
      case 'special-defense':
        specialDefense = stat['base_stat'];
        break;
      default:
        break;
    }
  });

  return {
    name,
    dexIndex,
    artworkUrl,
    hp,
    attack,
    defense,
    speed,
    specialAttack,
    specialDefense,
    types,
    abilities,
    height,
    weight,
    genderRatioFemale,
    genderRatioMale,
    captureRate,
    isLegendary,
    isMythical,
    hatchCounter,
    baseHappiness,
    baseExperience,
    habitat
  } as IPokemonParsedStats;
}
