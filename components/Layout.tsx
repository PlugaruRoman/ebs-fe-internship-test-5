import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Home.module.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
