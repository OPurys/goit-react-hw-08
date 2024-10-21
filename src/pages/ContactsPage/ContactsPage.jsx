import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import ContactList from '../../components/ContactList/ContactList';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Contacts</DocumentTitle>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
