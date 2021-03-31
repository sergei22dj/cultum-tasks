import * as React from 'react';
// libs
import { Control, Controller, FieldError } from 'react-hook-form';
// components
import Select, { Option, SelectProps } from '@md-shared/components/form/select';

interface Props extends Omit<SelectProps, 'inputRef'> {
  control: Control;
  error?: FieldError;
  name: string;
}

const FormSelect: React.FC<Props> = ({ control, error, name, options, ...rest }) => {
  const getValue = (value: string | string[]): Option | Option[] => {
    return Array.isArray(value)
      ? (value.map((i) => options.find(({ value }) => value === i)) as Option[])
      : (options.find((option) => option.value === value) as Option);
  };

  return (
    <Controller
      control={control}
      defaultValue=''
      name={name}
      render={({ onBlur, onChange, value, ref }) => (
        <Select
          errorText={error?.message}
          handleBlur={onBlur}
          handleChange={(value: string | string[]) => onChange(value)}
          inputRef={ref}
          name={name}
          options={options}
          value={getValue(value)}
          {...rest}
        />
      )}
    />
  );
};

export { FormSelect };
