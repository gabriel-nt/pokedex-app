import { DocumentNode } from 'graphql';

export type GraphQLRequest = {
  variables?: any;
  query: DocumentNode;
};

export interface GraphQLClient<T = any> {
  query: (data: GraphQLRequest) => Promise<GraphQLResponse<T>>;
}

export type GraphQLResponse<T = any> = {
  data: T;
  error?: any;
  loading?: boolean;
};
