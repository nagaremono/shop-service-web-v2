import { Container } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Header } from '../../shared/components/Header';
import { ProductsController } from './ProductsController';

export const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <Container my={8} maxW="80%" centerContent>
        <ProductsController />
      </Container>
    </>
  );
};
