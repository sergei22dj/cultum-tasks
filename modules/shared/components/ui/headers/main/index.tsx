import * as React from 'react';
// hooks
import { useRouter } from 'next/router';
// types
import { Tab } from '@md-shared/layouts/main';
// constants
import { globalMenuItems, graphqlMenuItems, reduxMenuItems } from './constants';
// view components
import { Logo } from '@md-ui/logos/main';
import { MenuItem } from '@md-ui/menu-items/main';
import { Switch } from '@md-shared/components/form/switch';
import TabItem from '@md-ui/headers/main/components/tab-item';
// views
import { Icon, IWrapper, LWrapper, RWrapper, TabsWrapper, Wrapper } from './views';

interface Props {
  activeTab?: string;
  childrenTabs?: Tab[];
  setActiveTab: (type: string) => void;
}

const SwitchIcons = () => (
  <>
    <Icon src='/static/images/redux.svg' alt='redux' />
    <Icon src='/static/images/graphql.svg' alt='graphql' />
  </>
);

const Header: React.FC<Props> = ({ childrenTabs, activeTab, setActiveTab }) => {
  const router = useRouter();

  const [toggled, setToggled] = React.useState(router.pathname.includes('redux'));

  const onChange = (value: boolean) => setToggled(value);

  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          {globalMenuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
          |
          {(toggled ? reduxMenuItems : graphqlMenuItems).map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
          <Switch isOn={toggled} onChange={onChange} content={<SwitchIcons />} />
        </RWrapper>
      </IWrapper>

      {!!childrenTabs?.length && (
        <TabsWrapper>
          {childrenTabs.map((tab) => (
            <TabItem
              id={tab.id}
              key={tab.id}
              title={tab.title}
              onClick={setActiveTab}
              isActive={activeTab === tab.id}
            />
          ))}
        </TabsWrapper>
      )}
    </Wrapper>
  );
};

export { Header };
