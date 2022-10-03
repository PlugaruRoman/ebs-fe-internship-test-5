import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { useInformer } from 'utils/index';

import 'leaflet/dist/leaflet.css';

import styles from './CompanyInfo.module.scss';

import mobile from 'public/mobile.svg';
import phone from 'public/phone.svg';
import mail from 'public/mail.svg';
import fax from 'public/fax.svg';

const MyAwesomeMap = dynamic(() => import('../OpenMap/OpenStreetMap'), {
  ssr: false,
});

const CompanyInfo: React.FC = () => {
  const { company, changeModalState } = useInformer();

  return (
    <div className={styles.contentCard}>
      <div className={styles.upColumn}>
        <div className={styles.column}>
          <h3>IDNO</h3>
          <div className={styles.bold}>{company.general_data.idno}</div>
        </div>
        <div className={styles.column}>
          <h3>Registration year</h3>
          <div className={styles.bold}>
            {company.general_data.creation_year}
          </div>
        </div>
        <div className={styles.column}>
          <h3>Staff</h3>
          <div className={styles.bold}>{company.general_data.size.name}</div>
        </div>
      </div>
      <div className={styles.downColumn}>
        <div className={styles.leftColumn}>
          <h3 className={styles.title}>Contact information</h3>
          <div className={styles.infoColumn}>
            <div className={styles.left}>
              <div className={styles.email}>
                EMAIL:
                {company.general_data.contact_info.emails.length > 0 ? (
                  <div onClick={changeModalState} className={styles.emailFlex}>
                    <Image height={20} width={20} src={mail} />
                    <span>Email</span>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.web}>
                WEBSITE:
                <div>
                  {company.general_data.contact_info.sites.length > 0 &&
                    company.general_data.contact_info.sites.map((el) => {
                      return (
                        <div className={styles.linkRow} key={el}>
                          <Link href={el}>
                            <a className={styles.webLink}>{el}</a>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className={styles.right}>
              PHONE/CELL PHONE/FAX:
              <div className={styles.contact}>
                {company.general_data.contact_info.phones.length > 0 ? (
                  <div onClick={changeModalState} className={styles.contactRow}>
                    <Image height={20} width={20} src={phone} />
                    <span>Phone</span>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.contact}>
                {company.general_data.contact_info.mobile.length > 0 ? (
                  <div onClick={changeModalState} className={styles.contactRow}>
                    <Image height={20} width={20} src={mobile} />
                    <span>Mobile phone</span>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.contact}>
                {company.general_data.contact_info.faxes.length > 0 ? (
                  <div onClick={changeModalState} className={styles.contactRow}>
                    <Image height={20} width={20} src={fax} />
                    <span>Fax</span>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <MyAwesomeMap />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
