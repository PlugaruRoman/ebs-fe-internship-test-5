import Link from 'next/link';

import styles from '../styles/Home.module.scss';

const Navbar = () => {
  return (
    <div>
      <div className={styles.nav}>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/companies'>
          <a>Companies</a>
        </Link>
        <Link href='/company'>
          <a>Company</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
