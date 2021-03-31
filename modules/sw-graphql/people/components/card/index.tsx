import * as React from 'react';
// components
import { Button } from '@md-ui/button';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle } from './views';
// view components
import { PersonLink } from '../person-link';

interface Props {
  id: string;
  name: string;
}

const Card: React.FC<Props> = ({ id, name }) => (
  <CardWrapper key={id}>
    <CardImgWrapper>
      <CardImg src={'/static/images/Ben-Kenobi.jpg'} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <PersonLink pId={id}>
        <CardFooterTitle>{name}</CardFooterTitle>
      </PersonLink>
      <PersonLink pId={id}>
        <Button preset='details'>Details</Button>
      </PersonLink>
    </CardFooter>
  </CardWrapper>
);

export { Card };
