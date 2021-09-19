import { Heading, Text, Grid } from '@chakra-ui/layout';
import React from 'react';
import { AspectRatio, GridItem, Image, SimpleGrid } from '@chakra-ui/react';

export const ProductCard: React.FC = () => {
  return (
    <Grid
      border="2px"
      borderColor="cyan.500"
      shadow="xl"
      rounded="md"
      p={4}
      w={['80%', '50%']}
      templateColumns={{ sm: '1fr', xl: 'repeat(5, 1fr)' }}
      templateRows={{ xl: '1fr 1fr 1fr' }}
      columnGap={{ sm: 0, xl: 4 }}
    >
      <GridItem
        rowSpan={{ sm: 1, xl: 3 }}
        colSpan={{ sm: 1, xl: 2 }}
        alignSelf="center"
      >
        <AspectRatio mx="auto" ratio={16 / 10} maxW="360" justify="center">
          <Image src={`fixtures/cashier.jpg`} alt={`image`} />
        </AspectRatio>
      </GridItem>
      <GridItem alignSelf="center" rowSpan={2} colSpan={3}>
        <Heading as="h4" fontSize={{ sm: 16, xl: 20 }} my={4} mx={2}>
          Product name
        </Heading>
        <SimpleGrid
          columns={1}
          spacing={2}
          mt={4}
          px={2}
          fontSize={{ sm: 14, xl: 18 }}
        >
          <Text as="span">
            <b>
              {parseFloat('1000.00').toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
              })}
            </b>
          </Text>
          <Text as="span">Stock left 10</Text>
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};
