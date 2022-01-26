import * as React from 'react';
// libs
import { Field } from 'react-final-form';
// components
import { TextField, TextFieldProps } from '@md-shared/components/form/text-field';
// utils
import isFunction from 'lodash/isFunction';

const WRAPPER_STYLE = { mb: 16 };

interface FormTextFieldProps extends TextFieldProps {
  name: string;
  handleOnBlur?: () => void;
  handleOnChange?: () => void;
}

const FinalFormInput: React.FC<FormTextFieldProps> = ({ handleOnBlur, handleOnChange, name, ...rest }) => {
  const handleOnChangeText = (text: string, formEventHandler: (value: string) => void) => {
    formEventHandler(text);
    isFunction(handleOnChange) && handleOnChange();
  };

  const handleOnFieldBlur = (formEventHandler: () => void) => {
    formEventHandler();
    handleOnBlur?.();
  };

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <TextField
          value={input.value}
          errorText={meta.error}
          wrapperStyle={WRAPPER_STYLE}
          onBlur={() => handleOnFieldBlur(input.onBlur)}
          onChange={(e) => handleOnChangeText(e.target.value, input.onChange)}
          {...rest}
        />
      )}
    </Field>
  );
};

export { FinalFormInput };
