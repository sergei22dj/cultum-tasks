import * as React from 'react';
// libs
import ReactSelect, { OptionsType } from 'react-select';
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
  errorText?: string;
  handleBlur?: () => unknown;
  handleChange?: (value: string | string[]) => unknown;
  handleFocus?: () => unknown;
  handleInputChange?: (value: string) => unknown;
  inputRef: React.Ref<ReactSelect>;
  isDisabled?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  label?: string;
  name: string;
  options: Option[];
  placeholder?: string;
  value?: Option | Option[];
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
  const [isFocused, setFocus] = React.useState<boolean>(false);

  const onBlur = () => {
    isFocused && setFocus(false);
    isFunction(handleBlur) && handleBlur();
  };

  const onFocus = () => {
    !isFocused && setFocus(true);
    isFunction(handleFocus) && handleFocus();
  };

  const onChange = (option: Option | OptionsType<Option> | null) => {
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
        inputRef={inputRef}
        instanceId={name}
        isDisabled={isDisabled}
        isMulti={isMulti}
        isSearchable={isSearchable}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onInputChange={onInputChange}
        options={options}
        placeholder={placeholder}
        styles={getSelectStyles({ isFocused, isDisabled, isError: !!errorText })}
        theme={reactSelectTheme}
        value={value}
      />
      <ErrorMessage errorText={errorText} />
    </Wrapper>
  );
};

export default Select;
