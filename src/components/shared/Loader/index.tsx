import { Flex, Spinner } from '@chakra-ui/react';

import { palette } from '@/styles/theme';

type LoaderProps = {
  fullWidth?: boolean;
};

function Loader({ fullWidth }: LoaderProps) {
  return (
    <Flex h={fullWidth ? '100vh' : '11rem'} align="center" justify="center">
      <Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color={palette.darkRed}
        size="xl"
      />
    </Flex>
  );
}

export default Loader;
