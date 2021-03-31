import * as React from 'react';
// hooks
import { useRouter } from 'next/router';
// constants
import { graphqlMenuItems, reduxMenuItems } from './constants';
// view components
import { Logo } from '@md-ui/logos/main';
import { Switch } from '@md-shared/components/form/switch';
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { Icon, IWrapper, LWrapper, RWrapper, Wrapper } from './views';

const SwitchIcons = () => (
  <>
    <Icon src={'/static/images/redux.svg'} alt='redux' />
    <Icon src={'/static/images/graphql.svg'} alt='graphql' />
  </>
);

const Header = () => {
  const router = useRouter();

  const [toggled, setToggled] = React.useState(router.pathname.includes('redux'));

  const onChange = (value: boolean): void => setToggled(value);

  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          <MenuItem href='/form' label='Form' /> |
          {(toggled ? reduxMenuItems : graphqlMenuItems).map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
          <Switch isOn={toggled} onChange={onChange} content={<SwitchIcons />} />
        </RWrapper>
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
