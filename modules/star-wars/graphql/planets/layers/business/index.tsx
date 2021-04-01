import * as React from 'react';
// context
import { PlanetsAPIContext } from '@md-sw-planets/layers/api/planets';
// types
import { Planet } from '@md-queries/planets/types';

type ListItem = Planet & { image: string };

interface Context {
  planetsList: ListItem[];
}

const PlanetsBLContext = React.createContext<Context>({
  planetsList: []
});

const PlanetsBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { planets } = React.useContext(PlanetsAPIContext);

  const planetsList = React.useMemo<ListItem[]>(() => {
    return planets.map(({ id, name }) => ({
      id,
      name,
      image: '/static/images/planet.png'
    }));
  }, [planets]);

  return (
    <PlanetsBLContext.Provider
      value={{
        planetsList
      }}
    >
      {children}
    </PlanetsBLContext.Provider>
  );
};

export { PlanetsBLContextProvider, PlanetsBLContext };
