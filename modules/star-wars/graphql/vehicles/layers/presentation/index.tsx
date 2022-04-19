import * as React from 'react';
// view components
import { ContentLoader } from '@md-modules/shared/components/ui/loaders/content-loader';
// views
import { ContentWrapper, Description, Title, Wrapper } from '@md-modules/shared/views/common';
import { VehiclesAPIContext } from '../api';
import { Card } from '@md-modules/star-wars/shared/components/card';

const VehiclesPresentation = () => {
    const { isLoading, error, vehicles } = React.useContext(VehiclesAPIContext);
    
    return(
        <ContentWrapper>
           <Title>Hello, am a Serega</Title>

           <Description>
               фыоврфолыралрфыафлыоа
         
           </Description>

           <ContentLoader isLoading={isLoading} error={error}>
               <Wrapper>
               {vehicles.map((vehicle) => (
               <Card
              key={vehicle.id}
              href='/graphql/vehicles/[id]'
              as={`/graphql/vehicles/${vehicle.id}`}
              {...vehicle} />
              
          ))}
               </Wrapper>

           </ContentLoader>

        </ContentWrapper>
    )
    
}

export { VehiclesPresentation }