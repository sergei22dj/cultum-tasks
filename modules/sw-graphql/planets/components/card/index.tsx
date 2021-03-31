import * as React from 'react';
// components
import { Button } from '@md-ui/button';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle } from './views';
// view components
import { PlanetLink } from '../planet-link';

interface Props {
  id: string;
  name: string;
}

const Card: React.FC<Props> = ({ id, name }) => (
  <CardWrapper key={id}>
    <CardImgWrapper>
      <CardImg src={'/static/images/planet.png'} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <PlanetLink pId={id}>
        <CardFooterTitle>{name}</CardFooterTitle>
      </PlanetLink>
      <PlanetLink pId={id}>
        <Button preset='details'>Details</Button>
      </PlanetLink>
    </CardFooter>
  </CardWrapper>
);

export { Card };
