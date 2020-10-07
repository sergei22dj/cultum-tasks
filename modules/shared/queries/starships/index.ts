import { gql } from '@apollo/client';

export const GET_STARSHIPS_QUERY = gql`
  query GetStarships(
    $after: String
    $first: Int
    $before: String
    $last: Int
    $skip: Int
    $orderBy: StarshipOrderByInput
  ) {
    starships(after: $after, first: $first, before: $before, last: $last, skip: $skip, orderBy: $orderBy) {
      id
      name
    }
  }
`;
