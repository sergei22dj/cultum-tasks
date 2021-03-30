import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Required').min(2, 'Name is too short'),
  email: yup.string().email("E-mail isn't valid").required('Required'),
  phoneNumber: yup
    .string()
    .matches(/^(?:[+].*\d|\d)$/, "Number should start with '+' and contain only digits")
    .min(11, 'Phone number is too short')
    .max(16, 'Phone number is too long')
    .required('Required')
});
