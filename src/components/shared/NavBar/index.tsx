import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import { pallete } from '@/styles/theme';

function NavBar() {
  return (
    <Box
      h="55px"
      w="100%"
      position="fixed"
      zIndex="1"
      d="flex"
      alignItems="center"
      bg={pallete.lightRed}
      boxShadow="0 10px 10px rgba(0, 0, 0, 0.1)"
    >
      <Flex
        w="10rem"
        h="55px"
        ml="3.5rem"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        borderBottom={`2px solid ${pallete.darkRed}`}
        bg={pallete.darkRed}
        transition="all .2s"
        _hover={{
          borderColor: '#fff'
        }}
      >
        <Heading as="h2" size="lg" color="#fff" fontFamily="Chakra Petch">
          <Link href="/">Pokédex</Link>
        </Heading>
      </Flex>
    </Box>
  );
}

export default NavBar;
