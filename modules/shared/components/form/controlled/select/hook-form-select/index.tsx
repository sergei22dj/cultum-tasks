import * as React from 'react';
// libs
import { Control, Controller } from 'react-hook-form';
// components
import Select, { Option, SelectProps } from '@md-shared/components/form/select';

interface Props extends Omit<SelectProps, 'inputRef'> {
  control: Control<any>;
  name: string;
}

const HookFormSelect: React.FC<Props> = ({ control, name, options, ...rest }) => {
  const getValue = (value: string | string[]): Option | Option[] =>
    Array.isArray(value)
      ? (value.map((i) => options.find(({ value }) => value === i)) as Option[])
      : (options.find((option) => option.value === value) as Option);

  return (
    <Controller
      control={control}
      defaultValue=''
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Select
          name={name}
          options={options}
          inputRef={field.ref}
          handleBlur={field.onBlur}
          errorText={error?.message}
          value={getValue(field.value)}
          handleChange={field.onChange}
          {...rest}
        />
      )}
    />
  );
};

export { HookFormSelect };
