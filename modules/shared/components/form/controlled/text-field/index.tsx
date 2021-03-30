import * as React from 'react';
// local
import { Control, Controller, FieldError } from 'react-hook-form';
import { TextFieldProps } from '@md-shared/components/form/text-field';
import { TextField } from '@md-modules/shared/components/form/text-field';

const WRAPPER_STYLE = { mb: 12 };

export interface FormTextFieldProps extends TextFieldProps {
  control: Control;
  defaultValue?: string;
  error?: FieldError;
  formatter?: (oldValue: string, newValue: string) => string;
  handleOnBlur?: () => void;
  handleOnChange?: (value?: string) => void;
  name: string;
}

interface HandleOnChangeTextProps {
  text: string;
  formValue: string;
  formEventHandler: (...event: any[]) => void;
}

const ControlledTextField: React.FC<FormTextFieldProps> = ({
  control,
  defaultValue = '',
  error,
  formatter,
  handleOnBlur,
  handleOnChange,
  name,
  ...rest
}) => {
  const handleOnChangeText = ({ text, formValue, formEventHandler }: HandleOnChangeTextProps) => {
    const value = formatter ? formatter(formValue, text) : text;

    formEventHandler(value);

    if (typeof handleOnChange === 'function') {
      handleOnChange(value);
    }
  };

  const handleOnFieldBlur = (formEventHandler: () => void) => {
    formEventHandler();

    if (typeof handleOnBlur === 'function') {
      handleOnBlur();
    }
  };

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ onChange, onBlur, value }) => {
        return (
          <TextField
            isInvalid={!!error}
            value={value}
            wrapperStyle={WRAPPER_STYLE}
            onBlur={() => handleOnFieldBlur(onBlur)}
            onChange={(e) => handleOnChangeText({ text: e.target.value, formValue: value, formEventHandler: onChange })}
            {...rest}
          />
        );
      }}
    />
  );
};

export { ControlledTextField };
