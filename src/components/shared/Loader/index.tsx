import { Flex, Spinner } from '@chakra-ui/react';

import { pallete } from '@/styles/theme';

type LoaderProps = {
  fullWidth?: boolean;
};

function Loader({ fullWidth }: LoaderProps) {
  return (
    <Flex
      h={fullWidth ? '100vh' : '11rem'}
      alignItems="center"
      justifyContent="center"
    >
      <Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color={pallete.darkRed}
        size="xl"
      />
    </Flex>
  );
}

export default Loader;
