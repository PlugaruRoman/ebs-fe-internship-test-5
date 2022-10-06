import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.footer}>
        <ul className={styles.list}>
          <li className={styles.listElem}>English</li>
          <li className={styles.listElem}>Login</li>
          <li className={styles.listElem}>View all</li>
          <li className={styles.listElem}>Help & Support</li>
        </ul>
        <div>© 2022 informer.md</div>
      </div>
    </div>
  );
};

export default Footer;
