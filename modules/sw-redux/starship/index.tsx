import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { StarshipInfo } from './components/starship-info';
// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
// types
import { RootStore } from 'store';
// helpers
import { clientError } from '@md-modules/shared/utils/errors';
// store
import * as API from '@md-store/modules/api';
import { ThunkDispatch } from '@md-store/helpers';
// views
import {
  ContentWrapper,
  StarshipDetailsContainer,
  StarshipImgContainer,
  StarshipInfoContainer,
  StarshipName,
  Wrapper
} from './views';

interface StarshipInfoProps {
  label: string;
  value: string | number;
}

const StarshipContainer = () => {
  // hooks
  const dispatch = useDispatch<ThunkDispatch>();
  const { query } = useRouter();

  // store
  const { data: starship, error, loading } = useSelector<
    RootStore,
    Pick<RootStore['api']['starship'], 'data' | 'error' | 'loading'>
  >((state) => ({
    data: state.api.starship.data,
    error: state.api.starship.error,
    loading: state.api.starship.loading
  }));

  // data transformation
  const starshipInfo = React.useMemo<StarshipInfoProps[]>(() => {
    if (!starship) {
      return [];
    }

    return [
      { label: 'Name', value: starship.properties.name ?? 'N/A' },
      { label: 'Model', value: starship.properties.model ?? 'N/A' },
      { label: 'Cost In Credits', value: starship.properties.cost_in_credits ?? 'N/A' },
      { label: 'Hyperdrive Rating', value: starship.properties.hyperdrive_rating ?? 'N/A' },
      { label: 'Passengers', value: starship.properties.passengers ?? 'N/A' }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [starship]);

  React.useEffect(() => {
    if (!query.id) return;

    dispatch(API.starship?.performAPIGetStarship(query.id as string));
  }, [dispatch, query.id]);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={loading} error={clientError(error)}>
          <StarshipImgContainer>
            <img src='/static/images/starship.jpg' alt='starship' />
          </StarshipImgContainer>
          <StarshipDetailsContainer>
            {starship && <StarshipName>{starship.properties.name}</StarshipName>}
            <StarshipInfoContainer>
              {starshipInfo.map((i, idx) => (
                <StarshipInfo key={idx} {...i} />
              ))}
            </StarshipInfoContainer>
          </StarshipDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { StarshipContainer };
