import Header from './Header/Header';
import Footer from './Footer/Footer';

import styles from '../styles/Home.module.scss';
import SearchBar from './SearchBar/SearchBar';
import Navbar from './NavBar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className={styles.mainPage}>
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
