import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
