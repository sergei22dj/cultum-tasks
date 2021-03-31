import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Required').min(2, 'Name is too short'),
  email: yup.string().email('Invalid email').required('Required'),
  phoneNumber: yup
    .string()
    .required('Required')
    .matches(/^\d+$/, 'Invalid number')
    .min(11, 'Phone number is too short')
    .max(16, 'Phone number is too long'),
  fruit: yup.string().required('Required'),
  fruits: yup.lazy((val) => (Array.isArray(val) ? yup.array().of(yup.string()) : yup.string()))
});
