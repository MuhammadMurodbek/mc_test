import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    contact: Yup.string()
        .max(13)
        .required('reqired'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });