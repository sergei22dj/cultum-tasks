import * as React from 'react';
// view components
import { Logo } from '@md-ui/logos/main';
import { Switch } from '@md-shared/components/form/switch';
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { Wrapper, IWrapper, LWrapper, RWrapper } from './views';
// hooks
import { useDispatch, useSelector } from 'react-redux';
// store
import { setToggleAction } from '@md-store/modules/ui/header-toggle';
// types
import { RootStore } from '@md-store/index';
// constants
import { reduxMenuItems, graphqlMenuItems } from './constants';

const Header = () => {
  const dispatch = useDispatch();

  const isToggled = useSelector<RootStore, RootStore['ui']['headerToggle']['toggled']>(
    (state) => state.ui.headerToggle.toggled
  );

  const handleOnSwitchToggle = () => dispatch(setToggleAction());

  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          {(isToggled ? reduxMenuItems : graphqlMenuItems).map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
          <Switch isOn={isToggled} text='use redux' handleOnSwitchToggle={handleOnSwitchToggle} />
        </RWrapper>
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
