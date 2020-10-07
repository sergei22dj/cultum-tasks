import { gql } from '@apollo/client';

export const GET_PLANETS_QUERY = gql`
  query AllPlanets($after: String, $first: Int, $before: String, $last: Int) {
    planets(after: $after, first: $first, before: $before, last: $last) {
      id
      name
    }
  }
`;
