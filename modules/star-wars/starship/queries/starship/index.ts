import { gql } from '@apollo/client';

export const GET_STARSHIP_QUERY = gql`
  query GetStarship($where: StarshipWhereUniqueInput!) {
    starship(where: $where) {
      id
      name
      status
      costInCredits
      hyperdriveRating
      passengers
      class
    }
  }
`;
