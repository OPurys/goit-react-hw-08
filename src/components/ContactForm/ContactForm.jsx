import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    toast.success('This contact has been successfully added!');
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(
        /^\+?[1-9]\d{0,14}(-\d{1,14})*$/,
        'Please enter a valid phone number'
      )
      .min(3)
      .max(16)
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
