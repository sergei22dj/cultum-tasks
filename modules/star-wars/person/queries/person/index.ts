import { gql } from '@apollo/client';

export const GET_PERSON_QUERY = gql`
  query Person($id: ID, $name: String) {
    Person(id: $id, name: $name) {
      id
      name
      gender
      hairColor
      eyeColor
      birthYear
    }
  }
`;
