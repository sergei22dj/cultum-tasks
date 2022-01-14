import * as React from 'react';
// libs
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import { Button } from '@md-ui/button';
import { FormInput, FormSelect } from '@md-shared/components/form';
// other
import { schema } from './validation-schema';
// views
import { ButtonWrapper, Form } from './views';
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

const BUTTON_STYLE = {
  width: '150px'
};

const FormExample = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: { fruits: ['vanilla', 'strawberry'] },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => window.alert(JSON.stringify(data));

  return (
    <ContentWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput control={control} label='Name' name='name' placeholder='Enter name...' />
        <FormInput control={control} label='Email' name='email' />
        <FormInput control={control} label='Phone number' name='phoneNumber' />
        <FormSelect control={control} label='Fruit' name='fruit' options={OPTIONS} />
        <FormSelect control={control} isMulti label='Fruits' name='fruits' options={OPTIONS} />

        <ButtonWrapper>
          <Button type='submit' buttonStyle={BUTTON_STYLE}>
            Submit Form
          </Button>
        </ButtonWrapper>
      </Form>
    </ContentWrapper>
  );
};

export { FormExample };
