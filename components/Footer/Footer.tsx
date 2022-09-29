import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.list}>
        <li>English</li>
        <li>Login</li>
        <li>View all</li>
        <li>Help & Support</li>
      </ul>
      <div className={styles.info}>© 2022 informer.md</div>
    </div>
  );
};

export default Footer;
