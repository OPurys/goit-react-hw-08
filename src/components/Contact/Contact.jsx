import css from './Contact.module.css';
import { HiUser } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/slice';
import { selectIsOpen } from '../../redux/modal/selectors';
import Modal from '../Modal/Modal';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);

  const handleOpen = () => {
    dispatch(openModal());
  };

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
      <button className={css.btn} type="button" onClick={handleOpen}>
        Delete
      </button>
      {isOpen && <Modal contact={contact} />}
    </li>
  );
};

export default Contact;
