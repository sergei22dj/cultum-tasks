import * as React from 'react';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle } from './views';

interface Props {
  name: string;
}

const Card: React.FC<Props> = ({ name }) => (
  <CardWrapper>
    <CardImgWrapper>
      <CardImg src={'/static/images/planet.png'} alt={name} />
    </CardImgWrapper>
    <CardFooter>
      <CardFooterTitle>{name}</CardFooterTitle>
    </CardFooter>
  </CardWrapper>
);

const memoized = React.memo(Card);

export { memoized as Card };
