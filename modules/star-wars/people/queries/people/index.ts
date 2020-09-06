import { gql } from '@apollo/client';

export const GET_PEOPLE_QUERY = gql`
  query AllPeople($after: String, $first: Int, $before: String, $last: Int) {
    allPersons(after: $after, first: $first, before: $before, last: $last) {
      id
      name
      birthYear
      eyeColor
      hairColor
      skinColor
      gender
    }
  }
`;
