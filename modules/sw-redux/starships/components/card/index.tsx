import * as React from 'react';
// components
import { Button } from '@md-ui/button';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle } from './views';
// view components
import { StarshipLink } from '../starship-link';

interface Props {
  name: string;
  id: string;
}

const Card: React.FC<Props> = ({ name, id }) => (
  <CardWrapper>
    <CardImgWrapper>
      <CardImg src={'/static/images/starship.jpg'} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <StarshipLink pId={id}>
        <CardFooterTitle>{name}</CardFooterTitle>
      </StarshipLink>
      <StarshipLink pId={id}>
        <Button preset='details'>Details</Button>
      </StarshipLink>
    </CardFooter>
  </CardWrapper>
);

const memoized = React.memo(Card);

export { memoized as Card };
