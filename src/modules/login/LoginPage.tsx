import {
  Flex,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  AuthMessage,
  LoginMutationVariables,
  useLoginMutation,
} from '../../generated/graphql';
import { client } from '../../lib/requestClient';
import { ClientError } from 'graphql-request';

export const LoginPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ mode: 'onBlur' });
  const errorToast = useToast();
  const router = useRouter();
  const { mutateAsync, data } = useLoginMutation<ClientError>(client, {});

  useEffect(() => {
    router.prefetch('/');
  }, [router]);

  data?.login === AuthMessage.CredentialsAccepted && router.replace('/');

  console.log({ errors });

  const onSubmit = async ({ email, password }: LoginMutationVariables) => {
    await mutateAsync({ email, password }).catch((error) => {
      errorToast({
        title: 'Authentication failed',
        description: error.response.errors?.[0].message,
        variant: 'left-accent',
        status: 'error',
        isClosable: true,
      });
    });
    reset();
  };

  return (
    <Container px={[12]} mt={8}>
      <Heading as="h1" mb={6}>
        Login
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email" mb={4} isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            placeholder="Your email address..."
            {...register('email', {
              required: 'Email is required',
            })}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" mb={4} isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            placeholder="Your password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Flex justify="center">
          <Button w="40%" type="submit" isLoading={isSubmitting}>
            Login
          </Button>
        </Flex>
      </form>
    </Container>
  );
};
