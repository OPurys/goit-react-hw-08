import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
