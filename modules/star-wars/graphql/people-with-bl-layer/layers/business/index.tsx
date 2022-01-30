import * as React from 'react';
// context
import { PeopleAPIContext, PersonItem } from '@md-sw/graphql/people-with-bl-layer/layers/api/people';

interface Context {
  personId?: string;
  selectedPerson?: PersonItem;
  setPersonId: (id: string) => void;
}

const PeopleBLLContext = React.createContext<Context>({
  setPersonId: () => {}
});

const PeopleBLLContextProvider: React.FC = ({ children }) => {
  const { people } = React.useContext(PeopleAPIContext);

  const [personId, setId] = React.useState<string>();

  const selectedPerson = React.useMemo(() => people.find((person) => person.id === personId), [people, personId]);

  const setPersonId = (id: string) => setId(id);

  return (
    <PeopleBLLContext.Provider value={{ selectedPerson, personId, setPersonId }}>{children}</PeopleBLLContext.Provider>
  );
};

export { PeopleBLLContextProvider, PeopleBLLContext };
