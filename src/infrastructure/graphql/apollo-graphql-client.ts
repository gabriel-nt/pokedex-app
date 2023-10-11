import {
  GraphQLClient,
  GraphQLRequest,
  GraphQLResponse
} from '@/application/protocols/graphql';

import { ApolloClient, InMemoryCache, ApolloError, gql } from '@apollo/client';

export class ApolloGraphQLClient implements GraphQLClient {
  client: ApolloClient<any>;

  constructor() {
    this.client = new ApolloClient({
      uri: 'https://beta.pokeapi.co/graphql/v1beta',
      cache: new InMemoryCache()
    });
  }

  async query({ query, variables }: GraphQLRequest): Promise<GraphQLResponse> {
    let response: GraphQLResponse;

    try {
      response = await this.client.query({
        query,
        variables
      });
    } catch (error) {
      response = (error as ApolloError)?.graphQLErrors[0];
    }

    return {
      data: response.data,
      error: response.error,
      loading: response.loading
    };
  }
}
