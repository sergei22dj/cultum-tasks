import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import Image from 'next/image';
import { Button } from '@md-ui/button';
// views
import { CardWrapper, CardsWrapper, Wrapper, Title } from '@md-modules/images/views';

const ImagesLoadingExamples = () => {
  const { reload } = useRouter();

  return (
    <Wrapper>
      <Title yellowColor>I recommend setting the mode to "Slow 3G" or "Fast 3G".</Title>

      <CardsWrapper>
        <CardWrapper>
          <Title>Default Image</Title>
          <img width={600} height={350} alt='Picture of the author' src='/static/images/Ben-Kenobi.jpg' />
        </CardWrapper>

        <CardWrapper>
          <Title>Lazy Loading</Title>
          <Image
            height={350}
            width={600}
            layout='intrinsic'
            placeholder='blur'
            alt='Picture of the author'
            src='/static/images/Ben-Kenobi.jpg'
            blurDataURL='/static/images/Ben-Kenobi.jpg'
          />
        </CardWrapper>

        <CardWrapper>
          <Title>Priority (eager) Loading</Title>
          <Image
            priority
            width={600}
            height={350}
            layout='intrinsic'
            placeholder='blur'
            alt='Picture of the author'
            src='/static/images/Ben-Kenobi.jpg'
            blurDataURL='/static/images/Ben-Kenobi.jpg'
          />
        </CardWrapper>
      </CardsWrapper>

      <Button onClick={reload}>Reload</Button>
    </Wrapper>
  );
};

export default ImagesLoadingExamples;
