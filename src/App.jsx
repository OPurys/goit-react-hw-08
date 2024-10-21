import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { selectIsRefreshing } from './redux/auth/selectors';

const Layout = lazy(() => import('./components/Layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? null : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
