import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavBar } from '../../store';

import styles from './NavBar.module.scss';

const Navbar = () => {
  const { pathname } = useRouter();

  const [navSelected, setNavSelected] = React.useState<string>('Home');

  const onClickSelectNav = (i: string) => {
    setNavSelected(i);
  };

  return (
    <div>
      <div className={styles.navBar}>
        {Object.keys(NavBar).map((el) => {
          return (
            <Link key={el} href={NavBar[el]}>
              <a
                onClick={() => onClickSelectNav(el)}
                className={
                  pathname === NavBar[el] ? styles.navActive : styles.nav
                }
              >
                {el}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
