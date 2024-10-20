import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div>
      <img
        className={css.image}
        src="https://static.vecteezy.com/system/resources/thumbnails/022/310/933/small_2x/404-error-page-not-found-3d-illustration-png.png"
        alt="NotFound404"
      />
    </div>
  );
};

export default NotFound;
