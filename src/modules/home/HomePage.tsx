import { Container } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ProductsController } from './ProductsController';

export const HomePage: NextPage = () => {
  return (
    <>
      <Container my={8} maxW="80%" centerContent>
        <ProductsController />
      </Container>
    </>
  );
};
