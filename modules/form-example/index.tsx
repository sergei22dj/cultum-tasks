import * as React from 'react';
import { css } from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// components
import { schema } from './validation-schema';
import { ContentWrapper } from '@md-shared/views/common';
import { ControlledTextField } from '@md-modules/shared/components/form/controlled/text-field';
// views
import { FormWrapper, Submit } from './views';

const WRAPPER_STYLE = { mb: 32 };

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

const LABEL_OVERRIDES = css`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

const FormExample = () => {
  const { control, formState, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => window.alert(JSON.stringify(data));
  return (
    <ContentWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          defaultValue=''
          name='name'
          errorText={formState.errors?.name?.message}
          isInvalid={!!formState.errors?.name}
          label='Name'
          wrapperStyle={WRAPPER_STYLE}
          placeholder={'Enter name here...'}
          labelOverrides={LABEL_OVERRIDES}
        />

        <ControlledTextField
          control={control}
          defaultValue=''
          name='email'
          errorText={formState.errors?.email?.message}
          isInvalid={!!formState.errors?.email}
          label='E-mail'
          wrapperStyle={WRAPPER_STYLE}
          placeholder={'Enter e-mail here...'}
          labelOverrides={LABEL_OVERRIDES}
        />

        <ControlledTextField
          control={control}
          defaultValue=''
          name='phoneNumber'
          errorText={formState.errors?.phoneNumber?.message}
          isInvalid={!!formState.errors?.phoneNumber}
          label='Phone number'
          wrapperStyle={WRAPPER_STYLE}
          placeholder={'Enter phone number here...'}
          labelOverrides={LABEL_OVERRIDES}
        />
        <Submit type='submit' value='Submit' />
      </FormWrapper>
    </ContentWrapper>
  );
};

export { FormExample };
