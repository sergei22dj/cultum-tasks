import React from 'react';
// views
import { Checkbox, Button, Label, Wrapper } from './views';

interface Props {
  isOn?: boolean;
  content?: React.ReactNode;
  onChange?: (value: boolean) => unknown;
}

const Switch: React.FC<Props> = ({ isOn = false, content, onChange }) => {
  const [toggled, setToggled] = React.useState(isOn);

  React.useEffect(() => setToggled(isOn), [isOn]);

  const handleToggle = () => {
    setToggled((prev) => {
      onChange?.(!prev);

      return !prev;
    });
  };

  return (
    <Wrapper toggled={toggled}>
      <Checkbox id={'switch'} type='checkbox' checked={toggled} onChange={handleToggle} />
      <Label htmlFor={'switch'}>
        <Button />
        {content && content}
      </Label>
    </Wrapper>
  );
};

export { Switch };
