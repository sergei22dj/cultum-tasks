import { gql } from '@apollo/client';

export const GET_PERSON_QUERY = gql`
  query Person($where: PersonWhereUniqueInput!) {
    person(where: $where) {
      id
      name
      gender
      hairColor
      eyeColor
      birthYear
    }
  }
`;
