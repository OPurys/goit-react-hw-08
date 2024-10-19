import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={css.label}>
        <span>Find contacts by name</span>
        <input
          className={css.input}
          onChange={e => dispatch(changeFilter(e.target.value))}
          type="text"
          name="contact"
        />
      </label>
    </div>
  );
};

export default SearchBox;
