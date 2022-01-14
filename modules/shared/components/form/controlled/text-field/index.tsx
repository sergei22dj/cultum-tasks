import * as React from 'react';
// libs
import { Control, Controller } from 'react-hook-form';
// components
import { TextField, TextFieldProps } from '@md-shared/components/form/text-field';
// utils
import isFunction from 'lodash/isFunction';

const WRAPPER_STYLE = { mb: 16 };

export interface FormTextFieldProps extends TextFieldProps {
  name: string;
  control: Control<any>;
  handleOnBlur?: () => void;
  handleOnChange?: () => void;
}

const FormInput: React.FC<FormTextFieldProps> = ({ control, handleOnBlur, handleOnChange, name, ...rest }) => {
  const handleOnChangeText = (text: string, formEventHandler: (value: string) => void) => {
    formEventHandler(text);
    isFunction(handleOnChange) && handleOnChange();
  };

  const handleOnFieldBlur = (formEventHandler: () => void) => {
    formEventHandler();
    handleOnBlur?.();
  };

  return (
    <Controller
      control={control}
      defaultValue=''
      name={name}
      render={({ field, fieldState: { error } }) => (
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
