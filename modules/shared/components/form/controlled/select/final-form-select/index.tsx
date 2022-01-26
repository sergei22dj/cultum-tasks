import * as React from 'react';
// libs
import { Field } from 'react-final-form';
// components
import Select, { Option, SelectProps } from '@md-shared/components/form/select';

interface Props extends Omit<SelectProps, 'inputRef'> {
  name: string;
}

const FinalFormSelect: React.FC<Props> = ({ name, options, ...rest }) => {
  const getValue = (value: string | string[]): Option | Option[] =>
    Array.isArray(value)
      ? (value.map((i) => options.find(({ value }) => value === i)) as Option[])
      : (options.find((option) => option.value === value) as Option);

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <Select
          name={name}
          options={options}
          inputRef={input.ref}
          errorText={meta.error}
          handleBlur={input.onBlur}
          handleChange={input.onChange}
          value={getValue(input.value)}
          {...rest}
        />
      )}
    </Field>
  );
};

export { FinalFormSelect };
