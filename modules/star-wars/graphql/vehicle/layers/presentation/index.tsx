import * as React from 'react';
// context
import { VehicleAPIContext } from '../api';
// view components
import Image from 'next/image';
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 600;

const VehiclePresentation = () => {
  const { isLoading, vehicle, error, vehicleInfo } = React.useContext(VehicleAPIContext);
    console.log('asdasdasd' + vehicle)
  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <ImgContainer>
            <Image
              alt='vehicle'
              layout='responsive'
              placeholder='blur'
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              src='/static/images/vehicle.jpg'
              blurDataURL='/static/images/vehicle.jpg'
            />
          </ImgContainer>
          <DetailsContainer>
            {vehicle && <Name>{vehicle.name}</Name>}
            <InfoContainer>
              {vehicleInfo.map((i, idx) => (
                <Info key={idx} {...i} />
              ))}
            </InfoContainer>
          </DetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { VehiclePresentation };
