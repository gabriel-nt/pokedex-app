import { ApolloGraphQLClient } from '@/infrastructure/graphql';

export const makeApolloGraphQLClient = (): ApolloGraphQLClient =>
  new ApolloGraphQLClient();
