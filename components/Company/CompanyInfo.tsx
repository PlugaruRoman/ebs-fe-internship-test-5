import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { useInformer } from '../../utils';

import 'leaflet/dist/leaflet.css';

import styles from './CompanyInfo.module.scss';

import mobile from '../../public/mobile.svg';
import phone from '../../public/phone.svg';
import mail from '../../public/mail.svg';
import fax from '../../public/fax.svg';

const MyAwesomeMap = dynamic(() => import('../OpenMap/OpenStreetMap'), {
  ssr: false,
});

const CompanyInfo: React.FC = () => {
  const { company, changeModalState } = useInformer();

  return (
    <div className={styles.contentCard}>
      <div className={styles.upColumn}>
        <div className={styles.column}>
          <div>IDNO</div>
          <div className={styles.bold}>{company.general_data.idno}</div>
        </div>
        <div className={styles.column}>
          <div>Registration year</div>
          <div className={styles.bold}>
            {company.general_data.creation_year}
          </div>
        </div>
        <div className={styles.column}>
          <div>Staff</div>
          <div className={styles.bold}>{company.general_data.size.name}</div>
        </div>
      </div>
      <div className={styles.downColumn}>
        <div className={styles.column}>
          <h3 className={styles.title}>Contact information</h3>
          <div className={styles.infoColumn}>
            <div className={styles.left}>
              <div className={styles.email}>
                EMAIL:
                <div onClick={changeModalState} className={styles.icon}>
                  {company.general_data.contact_info.emails.length > 0 ? (
                    <Image height={20} width={20} src={mail} />
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className={styles.web}>
                WEBSITE:
                <div>
                  {company.general_data.contact_info.sites.length > 0 && (
                    <Link href={company.general_data.contact_info.sites[0]}>
                      <a>
                        {company.general_data.contact_info.sites.map((el) => {
                          return <div key={el}>{el}</div>;
                        })}
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.right}>
              PHONE/CELL PHONE/FAX:
              <div onClick={changeModalState} className={styles.icon}>
                {company.general_data.contact_info.phones.length > 0 ? (
                  <Image height={20} width={20} src={phone} />
                ) : (
                  ''
                )}
              </div>
              <div onClick={changeModalState} className={styles.icon}>
                {company.general_data.contact_info.mobile.length > 0 ? (
                  <Image height={20} width={20} src={mobile} />
                ) : (
                  ''
                )}
              </div>
              <div onClick={changeModalState} className={styles.icon}>
                {company.general_data.contact_info.faxes.length > 0 ? (
                  <Image height={20} width={20} src={fax} />
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
