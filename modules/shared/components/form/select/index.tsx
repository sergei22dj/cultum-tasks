import * as React from 'react';
// libs
import ReactSelect, { OnChangeValue } from 'react-select';
// types
import { RefCallBack } from 'react-hook-form';
// components
import { ErrorMessage } from '@md-shared/components/form/error-message';
// views
import { Wrapper, Label, reactSelectTheme, getSelectStyles } from '@md-shared/components/form/select/views';
// utils
import isFunction from 'lodash/isFunction';

// types
export type Option = {
  value: string;
  label: string;
};

export interface SelectProps {
  name: string;
  label?: string;
  isMulti?: boolean;
  options: Option[];
  errorText?: string;
  isDisabled?: boolean;
  placeholder?: string;
  inputRef: RefCallBack;
  isSearchable?: boolean;
  value?: Option | Option[];
  handleBlur?: () => unknown;
  handleFocus?: () => unknown;
  handleInputChange?: (value: string) => unknown;
  handleChange?: (value: string | string[]) => unknown;
}

const Select: React.FC<SelectProps> = ({
  errorText,
  handleBlur,
  handleChange,
  handleFocus,
  handleInputChange,
  inputRef,
  isDisabled = false,
  isMulti,
  isSearchable,
  label,
  name,
  options,
  placeholder,
  value
}) => {
  const [isFocused, setFocus] = React.useState(false);

  const onBlur = () => {
    isFocused && setFocus(false);
    isFunction(handleBlur) && handleBlur();
  };

  const onFocus = () => {
    !isFocused && setFocus(true);
    isFunction(handleFocus) && handleFocus();
  };

  const onChange = (option: Option | OnChangeValue<Option, boolean> | null) => {
    if (!option) return;

    if (isFunction(handleChange)) {
      if (Array.isArray(option)) {
        handleChange(option.map(({ value }) => value));
      } else {
        handleChange((option as Option).value);
      }
    }
  };

  const onInputChange = (value: string, { action }: { action: string }) => {
    if (action === 'input-change') {
      isFunction(handleInputChange) && handleInputChange(value);
    }
  };

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <ReactSelect
        name={name}
        value={value}
        ref={inputRef}
        onBlur={onBlur}
        onFocus={onFocus}
        options={options}
        instanceId={name}
        isMulti={isMulti}
        onChange={onChange}
        isDisabled={isDisabled}
        theme={reactSelectTheme}
        placeholder={placeholder}
        isSearchable={isSearchable}
        onInputChange={onInputChange}
        styles={getSelectStyles({ isFocused, isDisabled, isError: !!errorText })}
      />
      <ErrorMessage errorText={errorText} />
    </Wrapper>
  );
};

export default Select;
