import styles from '../styles/Home.module.css'
import {useFormik} from "formik";
import * as Yup from 'yup';

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .required('Required'),
      password_confirmation: Yup.string()
        .required('Required')
    }),
    onSubmit: values => {
      console.log(values)
    }
  })
  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Title</label>
        <input
          id="name"
          type="text"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ?
          <div>{formik.errors.name}</div> : null}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...formik.getFieldProps('email')}        />
        {formik.touched.email && formik.errors.email ?
          <div>{formik.errors.email}</div> : null}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ?
          <div>{formik.errors.password}</div> : null}
        <label htmlFor="password_confirmation">Password confirm</label>
        <input
          id="password_confirmation"
          type="password"
          {...formik.getFieldProps('password_confirmation')}
        />
        {formik.touched.password_confirmation && formik.errors.password_confirmation ?
          <div>{formik.errors.password_confirmation}</div> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default function Home() {
  return (
    <RegisterForm />
  )
}
