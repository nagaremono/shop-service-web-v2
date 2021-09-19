import React from 'react';
import { useProductsQuery } from '../../generated/graphql';
import { client } from '../../lib/requestClient';
import { ProductGrid } from './ProductGrid';

export const ProductsController: React.FC = () => {
  const { data } = useProductsQuery(client, { take: 10 }, {});

  return <>{data && <ProductGrid products={data.products} />}</>;
};
