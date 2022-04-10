import { gql } from '@apollo/client';

export const GET_STARSHIPS_QUERY = gql`
  query GetStarships($after: String, $first: Int, $before: String, $last: Int) {
    allStarships(after: $after, first: $first, before: $before, last: $last) {
      totalCount
      starships {
        id
        name
        model
        starshipClass
      }
      pageInfo {
        endCursor
      }
    }
  }
`;
