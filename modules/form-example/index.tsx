import * as React from 'react';
// libs
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import { FormInput, FormSelect } from '@md-shared/components/form/index';
// other
import { schema } from './validation-schema';
// views
import { ContentWrapper } from '@md-shared/views/common';
import { FormWrapper, Button } from './views';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  fruit: string;
  fruits: string | string[];
}

const OPTIONS = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const FormExample = () => {
  const { control, formState, handleSubmit } = useForm<FormData>({
    defaultValues: { fruits: ['vanilla', 'strawberry'] },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => window.alert(JSON.stringify(data));

  return (
    <ContentWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          control={control}
          errorText={formState.errors?.name?.message}
          isInvalid={!!formState.errors?.name}
          label='Name'
          name='name'
          placeholder='Enter name...'
          multiple
        />
        <FormInput
          control={control}
          errorText={formState.errors?.email?.message}
          isInvalid={!!formState.errors?.email}
          label='Email'
          name='email'
        />
        <FormInput
          control={control}
          errorText={formState.errors?.phoneNumber?.message}
          isInvalid={!!formState.errors?.phoneNumber}
          label='Phone number'
          name='phoneNumber'
        />
        <FormSelect control={control} error={formState.errors?.fruit} label='Fruit' name='fruit' options={OPTIONS} />
        <FormSelect
          control={control}
          error={formState.errors?.fruits}
          isMulti
          label='Fruits'
          name='fruits'
          options={OPTIONS}
          placeholder='Select fruits...'
        />
        <Button type='submit'>Submit Form</Button>
      </FormWrapper>
    </ContentWrapper>
  );
};

export { FormExample };
