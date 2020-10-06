import { Person } from '@md-shared/types/person';

export type GetPerson = Pick<Person, 'id' | 'name' | 'birthYear' | 'eyeColor' | 'hairColor' | 'skinColor' | 'gender'>;
export type People = GetPerson[];

export interface GetPeopleResponse {
  persons: People;
}

export interface GetPeopleVariables {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}
