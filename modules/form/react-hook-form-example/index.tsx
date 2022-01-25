import * as React from 'react';
// libs
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import { Button } from '@md-ui/button';
import { HookFormInput, HookFormSelect } from '@md-shared/components/form';
// constants
import { OPTIONS, BUTTON_STYLE, FormData } from '@md-modules/form/constants';
// validation
import { schema } from '@md-modules/form/validation';
// views
import { ContentWrapper } from '@md-shared/views/common';
import { FormWrapper, ButtonWrapper } from '@md-modules/form/views';

const ReactHookFormExample = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: { fruits: ['vanilla', 'strawberry'] },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => window.alert(JSON.stringify(data));

  return (
    <ContentWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <HookFormInput control={control} label='Name' name='name' placeholder='Enter name...' />
        <HookFormInput control={control} label='Email' name='email' />
        <HookFormInput control={control} label='Phone number' name='phoneNumber' />
        <HookFormSelect control={control} label='Fruit' name='fruit' options={OPTIONS} />
        <HookFormSelect control={control} isMulti label='Fruits' name='fruits' options={OPTIONS} />

        <ButtonWrapper>
          <Button type='submit' buttonStyle={BUTTON_STYLE}>
            Submit Form
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </ContentWrapper>
  );
};

export { ReactHookFormExample };
