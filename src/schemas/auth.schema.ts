import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Name is required'),
    contact: Yup.string()
        .max(13)
        .required('Contact is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
  });