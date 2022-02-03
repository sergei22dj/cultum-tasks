import React from 'react';
// components
import Image from 'next/image';
import { Button } from '@md-ui/button';
// context
import { PeopleBLLContext } from '@md-sw/graphql/people-with-bl-layer/layers/business';
// views
import { CardFooter, CardFooterTitle, CardImgWrapper, CardWrapper } from '@md-sw/shared/components/card/views';

interface Props {
  id: string;
  name: string;
  image: string;
  withoutButton?: boolean;
}

const Card: React.FC<Props> = ({ id, name, image, withoutButton }) => {
  const { setPersonId } = React.useContext(PeopleBLLContext);

  return (
    <CardWrapper>
      <CardImgWrapper>
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={image}
          alt={`${name}-${id}`}
        />
      </CardImgWrapper>

      <CardFooter>
        <CardFooterTitle>{name}</CardFooterTitle>

        {!withoutButton && (
          <Button onClick={() => setPersonId(id)} preset='details'>
            Get ID
          </Button>
        )}
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
