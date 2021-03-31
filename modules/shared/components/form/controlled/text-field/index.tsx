import * as React from 'react';
// libs
import { Control, Controller, FieldError } from 'react-hook-form';
// components
import { TextField, TextFieldProps } from '@md-shared/components/form/text-field';
// utils
import isFunction from 'lodash/isFunction';

const WRAPPER_STYLE = { mb: 16 };

export interface FormTextFieldProps extends TextFieldProps {
  control: Control;
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

const FormInput: React.FC<FormTextFieldProps> = ({
  control,
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
    isFunction(handleOnChange) && handleOnChange(value);
  };

  const handleOnFieldBlur = (formEventHandler: () => void) => {
    formEventHandler();
    isFunction(handleOnBlur) && handleOnBlur();
  };

  return (
    <Controller
      control={control}
      defaultValue=''
      name={name}
      render={({ onChange, onBlur, value }) => {
        return (
          <TextField
            isInvalid={!!error}
            onBlur={() => handleOnFieldBlur(onBlur)}
            onChange={(e) => handleOnChangeText({ text: e.target.value, formValue: value, formEventHandler: onChange })}
            value={value}
            wrapperStyle={WRAPPER_STYLE}
            {...rest}
          />
        );
      }}
    />
  );
};

export { FormInput };
