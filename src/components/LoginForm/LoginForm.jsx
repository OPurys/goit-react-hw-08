import { Field, Form, Formik } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}`);
      })
      .catch(() => {
        toast.error('Invalid credentials');
      });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          <span>Email</span>
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          <span>Password</span>
          <Field className={css.input} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
