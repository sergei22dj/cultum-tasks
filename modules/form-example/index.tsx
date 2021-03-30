import * as React from 'react';
import { css } from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
// components
import { schema } from './validation-schema';
import { ContentWrapper } from '@md-shared/views/common';
import { TextField } from '@md-modules/shared/components/form/text-field';
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
  const { control, errors, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => window.alert(data);

  return (
    <ContentWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          defaultValue=''
          name='name'
          errorText={errors?.name?.message}
          isInvalid={!!errors?.name}
          label='Name'
          wrapperStyle={WRAPPER_STYLE}
          placeholder={'Enter name here...'}
          labelOverrides={LABEL_OVERRIDES}
          as={<TextField />}
        />

        <Controller
          control={control}
          defaultValue=''
          name='email'
          errorText={errors?.email?.message}
          isInvalid={!!errors?.email}
          label='E-mail'
          wrapperStyle={WRAPPER_STYLE}
          placeholder={'Enter e-mail here...'}
          labelOverrides={LABEL_OVERRIDES}
          as={<TextField />}
        />

        <Controller
          control={control}
          defaultValue=''
          name='phoneNumber'
          errorText={errors?.phoneNumber?.message}
          isInvalid={!!errors?.phoneNumber}
          label='Phone number'
          wrapperStyle={WRAPPER_STYLE}
          placeholder={'Enter phone number here...'}
          labelOverrides={LABEL_OVERRIDES}
          as={<TextField />}
        />
        <Submit type='submit' value='Submit' />
      </FormWrapper>
    </ContentWrapper>
  );
};

export { FormExample };
