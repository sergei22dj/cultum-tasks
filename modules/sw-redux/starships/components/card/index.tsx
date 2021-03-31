import { ViewButton } from '@md-modules/sw-graphql/starships/components/card/views';
import * as React from 'react';
import { StarshipLink } from '../starship-link';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle } from './views';

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
        <ViewButton>Details</ViewButton>
      </StarshipLink>
    </CardFooter>
  </CardWrapper>
);

const memoized = React.memo(Card);

export { memoized as Card };
