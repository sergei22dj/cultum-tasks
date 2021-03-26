import React from 'react';
import { Checkbox, Button, Label, Text, Wrapper } from './views';

interface Props {
  isOn?: boolean;
  text?: string;
  handleOnSwitchToggle?: () => unknown;
}

const Switch: React.FC<Props> = ({ isOn = false, text, handleOnSwitchToggle }) => {
  const [toggled, setToggled] = React.useState(isOn);

  const handleToggle = () => {
    if (typeof handleOnSwitchToggle === 'function') {
      handleOnSwitchToggle();
    }
    setToggled((prev) => !prev);
  };

  return (
    <Wrapper toggled={toggled}>
      <Checkbox id={'switch'} type='checkbox' checked={toggled} onChange={handleToggle} />
      <Label htmlFor={'switch'}>
        <Button />
      </Label>
      {text && <Text>{text.toUpperCase()}</Text>}
    </Wrapper>
  );
};

export { Switch };
