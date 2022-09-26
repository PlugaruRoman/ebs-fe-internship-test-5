import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Home.module.scss';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SearchBar />
        <Navbar />
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
