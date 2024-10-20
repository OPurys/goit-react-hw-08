import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>
      <p className={css.text}>
        This is an application where you can manage your own contacts
      </p>
      <img
        className={css.image}
        src="https://www.kalido.me/wp-content/uploads/2018/06/1LBdRknvBbtETO-SprktlVA.png"
        alt="Phonebook"
      />
    </div>
  );
};

export default HomePage;
