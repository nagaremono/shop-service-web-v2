import { VStack } from '@chakra-ui/react';
import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid: React.FC = () => {
  return (
    <VStack spacing={6} w="100%">
      {[1].map((p) => (
        <ProductCard key={p} />
      ))}
    </VStack>
  );
};
