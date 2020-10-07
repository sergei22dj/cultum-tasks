import { gql } from '@apollo/client';

export const GET_PLANET_QUERY = gql`
  query GetPlanet($where: PlanetWhereUniqueInput!) {
    planet(where: $where) {
      id
      name
      status
      population
      orbitalPeriod
      gravity
      diameter
    }
  }
`;
