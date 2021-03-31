import * as React from 'react';
// libs
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import { FormInput, FormSelect } from '@md-shared/components/form/index';
// other
import { schema } from './validation-schema';
// views
import { Form, Button } from './views';
import { ContentWrapper } from '@md-shared/views/common';

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          control={control}
          error={formState.errors?.name}
          label='Name'
          name='name'
          placeholder='Enter name...'
        />
        <FormInput control={control} error={formState.errors?.email} label='Email' name='email' />
        <FormInput control={control} error={formState.errors?.phoneNumber} label='Phone number' name='phoneNumber' />
        <FormSelect control={control} error={formState.errors?.fruit} label='Fruit' name='fruit' options={OPTIONS} />
        <FormSelect
          control={control}
          error={formState.errors?.fruits}
          isMulti
          label='Fruits'
          name='fruits'
          options={OPTIONS}
        />
        <Button type='submit'>Submit Form</Button>
      </Form>
    </ContentWrapper>
  );
};

export { FormExample };
