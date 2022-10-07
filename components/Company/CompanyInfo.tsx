import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { useInformer } from 'context/index';

import 'leaflet/dist/leaflet.css';

import styles from './CompanyInfo.module.scss';

import mobile from 'public/mobile.svg';
import phone from 'public/phone.svg';
import mail from 'public/mail.svg';
import fax from 'public/fax.svg';

import CompanyProps from 'types/companyprops';

const MyAwesomeMap = dynamic(() => import('../OpenMap/OpenStreetMap'), {
  ssr: false,
});

const CompanyInfo: React.FC<CompanyProps> = ({ company }) => {
  const { changeModalState } = useInformer();
  return (
    <div className={styles.contentCard}>
      <div className={styles.upColumn}>
        <div className={styles.column}>
          <h3 className={styles.titleColumn}>IDNO</h3>
          <div className={styles.textColumn}>{company.general_data.idno}</div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.titleColumn}>Registration year</h3>
          <div className={styles.textColumn}>
            {company.general_data.creation_year}
          </div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.titleColumn}>Staff</h3>
          <div className={styles.textColumn}>
            {company.general_data.size.name}
          </div>
        </div>
      </div>
      <div className={styles.downColumn}>
        <div className={styles.leftDownColumn}>
          <h3 className={styles.titleDownColumn}>Contact information</h3>
          <div className={styles.infoDownColumn}>
            <div className={styles.contactList}>
              EMAIL:
              <div className={styles.contact}>
                {company.general_data.contact_info.emails.length > 0 ? (
                  <div onClick={changeModalState} className={styles.contactRow}>
                    <Image height={20} width={20} src={mail} />
                    <span className={styles.contactName}>Email</span>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.websiteInfo}>
                WEBSITE:
                <div>
                  {company.general_data.contact_info.sites.length > 0 &&
                    company.general_data.contact_info.sites.map((el) => {
                      return (
                        <div className={styles.webLinkRow} key={el}>
                          <Link href={el}>
                            <a className={styles.webLink}>{el}</a>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className={styles.contactList}>
              PHONE/CELL PHONE/FAX:
              <div className={styles.contact}>
                {company.general_data.contact_info.phones.length > 0 ? (
                  <div onClick={changeModalState} className={styles.contactRow}>
                    <Image height={20} width={20} src={phone} />
                    <span className={styles.contactName}>Phone</span>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.contact}>
                {company.general_data.contact_info.mobile.length > 0 ? (
                  <div onClick={changeModalState} className={styles.contactRow}>
                    <Image height={20} width={20} src={mobile} />
                    <span className={styles.contactName}>Mobile phone</span>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.contact}>
                {company.general_data.contact_info.faxes.length > 0 ? (
                  <div onClick={changeModalState} className={styles.contactRow}>
                    <Image height={20} width={20} src={fax} />
                    <span className={styles.contactName}>Fax</span>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <MyAwesomeMap company={company} />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
