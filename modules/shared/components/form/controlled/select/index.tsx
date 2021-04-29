import * as React from 'react';
// libs
import { Control, Controller, FieldError } from 'react-hook-form';
// components
import Select, { Option, SelectProps } from '@md-shared/components/form/select';

interface Props extends Omit<SelectProps, 'inputRef'> {
  control: Control<any>;
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
      render={({ field }) => (
        <Select
          errorText={error?.message}
          handleBlur={field.onBlur}
          handleChange={(value: string | string[]) => field.onChange(value)}
          inputRef={field.ref}
          name={name}
          options={options}
          value={getValue(field.value)}
          {...rest}
        />
      )}
    />
  );
};

export { FormSelect };
