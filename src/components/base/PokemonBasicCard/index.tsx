import { useState } from 'react';
import { usePalette } from 'react-palette';
import { Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { palette } from '@/styles/theme';
import Loader from '@/components/shared/Loader';
import { IPokemonEssentials } from '@/types';

function PokemonBasicCard({ name, dexIndex, artworkUrl }: IPokemonEssentials) {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const { data: mainColor } = usePalette(artworkUrl);

  return (
    <Flex
      w="100%"
      h="15rem"
      m="38.5px"
      direction="column"
      border={`2px solid ${palette.lightGray}`}
      borderRadius="8px"
      bgGradient={`linear(to-b, ${mainColor.lightVibrant}, ${palette.lightGray})`}
      cursor="pointer"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"
      transition="all .2s"
      _hover={{
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 20px 30px',
        transform: 'translateY(-6px)'
      }}
    >
      <Flex
        w="2.5rem"
        h="1.5rem"
        m="-1px"
        direction="row"
        align="center"
        justify="center"
        position="relative"
        fontWeight="600"
        borderRadius="5px 0 5px 0"
        bg={palette.lightGray}
      >
        <Text>{dexIndex}</Text>
      </Flex>
      <Flex w="100%" justify="center">
        {isImgLoading && <Loader />}
        <Link href={`/pokemon/${dexIndex}`} passHref={true}>
          <Image
            src={artworkUrl}
            alt=""
            maxW="75%"
            onLoad={() => setIsImgLoading(false)}
          />
        </Link>
      </Flex>
      <Flex
        w="100%"
        h="3rem"
        justify="center"
        align="center"
        bg={palette.lightGray}
      >
        <Text fontWeight="600">{name}</Text>
      </Flex>
    </Flex>
  );
}

export default PokemonBasicCard;
