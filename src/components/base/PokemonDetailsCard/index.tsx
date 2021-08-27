import { Flex, Heading, Text, Image, Progress } from '@chakra-ui/react';
import { usePalette } from 'react-palette';

import { usePokemons } from '@/hooks/usePokemons';
import { palette } from '@/styles/theme';

function PokemonDetailsCard() {
  const { pokemon } = usePokemons();
  const { data: mainColor } = usePalette(pokemon.artworkUrl);

  return (
    <Flex h="100vh" pt="70px">
      <Flex
        w="60%"
        h="90%"
        m="auto"
        direction="column"
        justify="space-between"
        border={`1px solid ${palette.border}`}
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
      >
        <Flex
          w="100%"
          h="10%"
          px="30px"
          direction="row"
          justify="space-between"
          align="center"
          borderBottom={`1px solid ${palette.border}`}
          borderRadius="10px 10px 0 0"
          bg={palette.darkGray}
        >
          <Heading as="h3" size="lg">
            {pokemon.dexIndex}
          </Heading>
          {pokemon.isLegendary && (
            <Flex
              w="6.5rem"
              h="1.8rem"
              justify="center"
              align="center"
              borderRadius="5px"
              bg="yellow.200"
            >
              <Text fontWeight="600">Legendary</Text>
            </Flex>
          )}
        </Flex>
        <Flex
          w="100%"
          h="55%"
          direction="row"
          bgGradient={`linear(to-r, ${mainColor.lightVibrant}, ${palette.darkGray})`}
        >
          <Flex w="30%" justify="flex-end" align="center">
            <Image src={pokemon.artworkUrl} alt={pokemon.name} maxW="90%" />
          </Flex>
          <Flex w="70%" direction="column">
            <Flex h="15%" px="1rem" justify="flex-start" align="center">
              <Heading as="h4" size="lg">
                {pokemon.name}
              </Heading>
            </Flex>
            <Flex h="85%" direction="column" justify="space-evenly">
              <Flex mx="4rem" justify="space-between" align="center">
                <Text fontWeight="bold">HP</Text>
                <Progress
                  value={pokemon.hp}
                  transitionDuration="5s"
                  w="md"
                  h="1.3rem"
                  colorScheme="whatsapp"
                  borderRadius="3px"
                  hasStripe
                  isAnimated
                />
              </Flex>
              <Flex mx="4rem" justify="space-between" align="center">
                <Text fontWeight="bold">Attack</Text>
                <Progress
                  value={pokemon.attack}
                  w="md"
                  h="1.3rem"
                  colorScheme="red"
                  borderRadius="3px"
                  hasStripe
                  isAnimated
                />
              </Flex>
              <Flex mx="4rem" justify="space-between" align="center">
                <Text fontWeight="bold">Defense</Text>
                <Progress
                  value={pokemon.defense}
                  w="md"
                  h="1.3rem"
                  colorScheme="twitter"
                  borderRadius="3px"
                  hasStripe
                  isAnimated
                />
              </Flex>
              <Flex mx="4rem" justify="space-between" align="center">
                <Text fontWeight="bold">Speed</Text>
                <Progress
                  value={pokemon.speed}
                  w="md"
                  flexShrink={1}
                  h="1.3rem"
                  colorScheme="yellow"
                  borderRadius="3px"
                  hasStripe
                  isAnimated
                />
              </Flex>
              <Flex mx="4rem" justify="space-between" align="center">
                <Text fontWeight="bold">Sp. Attack</Text>
                <Progress
                  value={pokemon.specialAttack}
                  w="md"
                  h="1.3rem"
                  colorScheme="orange"
                  borderRadius="3px"
                  hasStripe
                  isAnimated
                />
              </Flex>
              <Flex mx="4rem" justify="space-between" align="center">
                <Text fontWeight="bold">Sp. Defense</Text>
                <Progress
                  value={pokemon.specialDefense}
                  w="md"
                  h="1.3rem"
                  colorScheme="purple"
                  borderRadius="3px"
                  hasStripe
                  isAnimated
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          h="35%"
          bg={palette.darkGray}
          borderTop={`1px solid ${palette.border}`}
          borderRadius="0 0 10px 10px"
        >
          <Flex
            w="50%"
            pl="12.5%"
            direction="column"
            justify="space-evenly"
            align="flex-start"
          >
            <Text>
              <strong>Weight:</strong> {pokemon.weight} lbs.
            </Text>
            <Text>
              <strong>Height:</strong> {pokemon.height} ft.
            </Text>
            <Text>
              <strong>Catch Rate:</strong> {pokemon.captureRate}%
            </Text>
            <Text>
              <strong>Gender Ratio:</strong> ♂ {pokemon.genderRatioMale}% | ♀{' '}
              {pokemon.genderRatioFemale}%
            </Text>
            <Text>
              <strong>Base Happiness:</strong> {pokemon.baseHappiness}
            </Text>
          </Flex>
          <Flex
            w="50%"
            pl="12.5%"
            direction="column"
            justify="space-evenly"
            align="flex-start"
          >
            {pokemon.types && (
              <Flex direction="row">
                <strong>Type(s):</strong>
                <ul className="ul__pokemon-stats">
                  {pokemon.types.map((type, index) => {
                    return <li key={index}>{type}</li>;
                  })}
                </ul>
              </Flex>
            )}
            <Text>
              <strong>Hatch Steps:</strong> {pokemon.hatchCounter} steps
            </Text>
            <Text>
              <strong>Habitat:</strong> {pokemon.habitat}
            </Text>
            {pokemon.abilities && (
              <Flex direction="row">
                <strong>Abilities:</strong>
                <ul className="ul__pokemon-stats">
                  {pokemon.abilities.map((ability, index) => {
                    return <li key={index}>{ability}</li>;
                  })}
                </ul>
              </Flex>
            )}
            <Text>
              <strong>Base Experience:</strong> {pokemon.baseExperience}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PokemonDetailsCard;
