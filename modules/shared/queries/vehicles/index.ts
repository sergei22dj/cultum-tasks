import { gql } from '@apollo/client';

export const GET_VEHICLES_QUERY = gql`
query AllVehicles($after: String, $first: Int, $before: String, $last: Int){
    allVehicles(after: $after, first: $first, before: $before, last: $last){
    totalCount
      vehicles {
        id
        name
      }
    }
}
`