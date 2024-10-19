import css from './Contact.module.css';
import { HiUser } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <div>
        <h2 className={css.subtitle}>
          <HiUser size={20} />
          {contact.name}
        </h2>
        <p className={css.phone}>
          <FaPhoneAlt size={15} />
          {contact.number}
        </p>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
