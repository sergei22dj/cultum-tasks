import * as React from 'react';
// libs
import { Field } from 'react-final-form';
// components
import Select, { Option, SelectProps } from '@md-shared/components/form/select';

interface Props extends Omit<SelectProps, 'inputRef'> {
  name: string;
}

const FinalFormSelect: React.FC<Props> = ({ name, options, ...rest }) => {
  const getValue = (value: string | string[]): Option | Option[] => {
    return Array.isArray(value)
      ? (value.map((i) => options.find(({ value }) => value === i)) as Option[])
      : (options.find((option) => option.value === value) as Option);
  };

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <Select
          errorText={meta.error}
          handleBlur={input.onBlur}
          handleChange={(value: string | string[]) => input.onChange(value)}
          inputRef={input.ref}
          name={name}
          options={options}
          value={getValue(input.value)}
          {...rest}
        />
      )}
    </Field>
  );
};

export { FinalFormSelect };
