import * as yup from 'yup';
import { useMemo } from 'react';
import { setIn } from 'final-form';
import { AnyObject } from 'yup/lib/object';
import { TypedSchema } from 'yup/lib/util/types';

const setInError = (errors: any, innerError: any) => setIn(errors, innerError.path, innerError.message);

const emptyObj = Object.create(null);

export const makeValidate = (schema: yup.InferType<TypedSchema>) => async (values: AnyObject) => {
  try {
    await schema.validate(values, { abortEarly: false });
  } catch (err: any) {
    return err.inner.reduce(setInError, emptyObj);
  }
};

export const useValidationSchema = (schema: yup.InferType<TypedSchema>) =>
  useMemo(() => makeValidate(schema), [schema]);
