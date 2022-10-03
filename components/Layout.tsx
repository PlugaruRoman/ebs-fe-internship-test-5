import Header from './Header/Header';
import Footer from './Footer/Footer';
import SearchBar from './SearchBar/SearchBar';
import Navbar from './NavBar/NavBar';

import styles from 'styles/Home.module.scss';

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
