import { setIn } from 'final-form';
import { useMemo } from 'react';
import * as yup from 'yup';
import { AnyObject } from 'yup/lib/object';
import { TypedSchema } from 'yup/lib/util/types';

const setInError = (errors: any, innerError: any) => {
  return setIn(errors, innerError.path, innerError.message);
};

const emptyObj = Object.create(null);

export const makeValidate = (schema: yup.InferType<TypedSchema>) => {
  return async (values: AnyObject) => {
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (err: any) {
      return err.inner.reduce(setInError, emptyObj);
    }
  };
};

const useValidationSchema = (schema: yup.InferType<TypedSchema>) => {
  const validate = useMemo(() => makeValidate(schema), [schema]);

  return validate;
};

export default useValidationSchema;
