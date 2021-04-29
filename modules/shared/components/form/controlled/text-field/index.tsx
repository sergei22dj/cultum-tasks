import * as React from 'react';
// libs
import { Control, Controller, FieldError } from 'react-hook-form';
// components
import { TextField, TextFieldProps } from '@md-shared/components/form/text-field';
// utils
import isFunction from 'lodash/isFunction';

const WRAPPER_STYLE = { mb: 16 };

export interface FormTextFieldProps extends TextFieldProps {
  control: Control<any>;
  error?: FieldError;
  handleOnBlur?: () => void;
  handleOnChange?: () => void;
  name: string;
}

const FormInput: React.FC<FormTextFieldProps> = ({ control, error, handleOnBlur, handleOnChange, name, ...rest }) => {
  const handleOnChangeText = (text: string, formEventHandler: (value: string) => void): void => {
    formEventHandler(text);
    isFunction(handleOnChange) && handleOnChange();
  };

  const handleOnFieldBlur = (formEventHandler: () => void): void => {
    formEventHandler();
    handleOnBlur?.();
  };

  return (
    <Controller
      control={control}
      defaultValue=''
      name={name}
      render={({ field }) => (
        <TextField
          errorText={error?.message}
          onBlur={() => handleOnFieldBlur(field.onBlur)}
          onChange={(e) => handleOnChangeText(e.target.value, field.onChange)}
          value={field.value}
          wrapperStyle={WRAPPER_STYLE}
          {...rest}
        />
      )}
    />
  );
};

export { FormInput };
