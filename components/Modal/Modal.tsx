import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useInformer } from 'context/index';

import styles from './Modal.module.scss';

import close from 'public/close.png';

const Modal: React.FC = () => {
  const { modalActive, changeModalState } = useInformer();

  return (
    <div className={styles.content}>
      <div className={modalActive ? styles.modalActive : styles.modal}>
        <div className={styles.modalContent}>
          <div onClick={changeModalState} className={styles.closeImg}>
            <Image width={20} height={20} src={close} />
          </div>
          <h3>This information is only available to subscribed users</h3>
          <Link href={'https://informer.md/en/ab/subscription'}>
            <button>View products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
