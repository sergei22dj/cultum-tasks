import * as React from 'react';
// components
import Image from 'next/image';
import { Link } from '@md-ui/link';
import { Button } from '@md-ui/button';
// views
import { CardWrapper, CardImgWrapper, CardFooter, CardFooterTitle } from './views';
// types
import { LinkProps } from 'next/link';

interface Props extends LinkProps {
  id: string;
  name: string;
  image: string;
}

const Card: React.FC<Props> = ({ id, name, image, ...rest }) => (
  <CardWrapper>
    <CardImgWrapper>
      <Image src={image} layout='fill' objectFit='cover' placeholder='blur' blurDataURL={image} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <Link {...rest}>
        <CardFooterTitle>{name}</CardFooterTitle>
      </Link>
      <Link {...rest}>
        <Button preset='details'>Details</Button>
      </Link>
    </CardFooter>
  </CardWrapper>
);

const memoized = React.memo(Card);

export { memoized as Card };
