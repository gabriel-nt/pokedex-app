declare module '*.png';
declare module '*.jpg';

declare module '*.gql' {
  import { DocumentNode } from 'graphql';
  const Schema: DocumentNode;

  export = Schema;
}
