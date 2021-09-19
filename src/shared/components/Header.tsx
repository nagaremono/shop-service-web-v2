import { Flex, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';
import { client } from '../../lib/requestClient';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const Header: React.FC = () => {
  const { data } = useMeQuery(client, {});
  const { mutateAsync } = useLogoutMutation(client, {});
  const router = useRouter();

  const logout = async () => {
    await mutateAsync({});
    router.reload();
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      height={16}
      bg="gray.400"
      p={4}
    >
      <Text as="span" fontSize={20}>
        Shop Service
      </Text>
      {data ? (
        <Flex
          justifyContent="space-evenly"
          maxW="300px"
          w="25%"
          alignItems="center"
        >
          <Text verticalAlign="middle" fontSize={16}>
            Hi {data.me?.username}
          </Text>
          <Button onClick={logout} size="sm">
            Logout
          </Button>
        </Flex>
      ) : (
        <NextLink href="/login">
          <Link>Login</Link>
        </NextLink>
      )}
    </Flex>
  );
};
