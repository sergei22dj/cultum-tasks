import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import Image from 'next/image';
import { Button } from '@md-ui/button';
// views
import { CardWrapper, CardsWrapper, Wrapper, Title, SubTitle, DefaultImage } from '@md-modules/images/views';

const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 338;

const ImagesLoadingExamples = () => {
  const { reload } = useRouter();

  return (
    <Wrapper>
      <Title yellowColor>I recommend setting the mode to "Slow 3G" or "Fast 3G".</Title>

      <CardsWrapper>
        <CardWrapper>
          <Title>Default {'<img/>'} tag</Title>

          <SubTitle>Until this photo is loaded, the user will not see anything on the screen</SubTitle>
          <DefaultImage alt='Picture of the author' src='/static/images/Ben-Kenobi.jpg' />
        </CardWrapper>

        <CardWrapper>
          <Title>Lazy Loading</Title>

          <SubTitle>
            This photo has a lazy loading logic, so it loads after all components will be rendered. Also, this photo
            will be loaded only if it is in the viewport.
          </SubTitle>

          <Image
            layout='intrinsic'
            placeholder='blur'
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            alt='Picture of the author'
            src='/static/images/Ben-Kenobi.jpg'
            blurDataURL='/static/images/Ben-Kenobi.jpg'
          />
        </CardWrapper>

        <CardWrapper>
          <Title>Priority(eager) Loading</Title>
          <SubTitle>
            (`Priority` props): When true, the image will be considered high priority and preload. Lazy loading is
            automatically disabled for images using priority
          </SubTitle>

          <Image
            priority
            layout='intrinsic'
            placeholder='blur'
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
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
