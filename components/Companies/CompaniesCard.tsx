import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useInformer } from 'utils/index';

import styles from './CompaniesCard.module.scss';

import mobile from 'public/mobile.svg';
import phone from 'public/phone.svg';
import mail from 'public/mail.svg';
import website from 'public/web.svg';

interface AllCompanies {
  companies: Companies;
}

const CompaniesCard: React.FC<AllCompanies> = ({ companies }) => {
  const { changeModalState, setSelectedCompany, setSearch } = useInformer();

  const selectCompany = React.useCallback((el: Companies) => {
    setSelectedCompany(el);
    setSearch('');
  }, []);

  return (
    <div className={styles.content}>
      <div
        className={
          companies.partners.length > 0
            ? styles.companiesCardLong
            : styles.companiesCard
        }
      >
        <div
          onClick={() => selectCompany(companies)}
          className={styles.cardMainInfo}
        >
          <div className={styles.cardFoto}>
            {companies.name
              .split(/[\s,.-]+/)
              .filter((word: string) => word.length > 3)
              .map((word: string) => word[0])
              .join('')}
          </div>
          <div className={styles.cardTitle}>
            <Link href={'/company'}>
              <a>{companies.name}</a>
            </Link>
            <div>{companies.location}</div>
          </div>
        </div>

        <div className={styles.cardSecondInfo}>
          <ul className={styles.leftColumn}>
            <li>
              IDNO: <span> {companies.idno} </span>
            </li>
            <li>
              STATUS:
              <span
                className={
                  companies.status === 'ACTIVE'
                    ? styles.statusActive
                    : styles.statusDeleted
                }
              >
                {companies.status}
              </span>
            </li>
            <li>
              Date of establishment:<span> {companies.creation_year} </span>
            </li>
            <li>
              Age:<span> {2022 - companies.creation_year} years</span>
            </li>
          </ul>
          <ul className={styles.midlColumn}>
            <li>
              Nr. by the employees:
              <span> {companies.employees ? companies.employees : '---'}</span>
            </li>
            <li>
              Turnover :
              <span>
                {companies.turnover ? ` ${companies.turnover}  MLD` : '---'}
              </span>
            </li>
            <li>
              Industry :
              <span> {companies.industry ? companies.industry : '---'}</span>
            </li>
          </ul>
          <div className={styles.rightColumn}>
            <div className={styles.contacts}> Contacts: </div>
            <ul className={styles.rightColumnList}>
              <li
                onClick={changeModalState}
                className={companies.mobile ? '' : styles.elementHidden}
              >
                <Image height={20} width={20} src={mobile} alt='mobile' />
                <span className={styles.text}>Phone mobile</span>
              </li>
              <li
                onClick={changeModalState}
                className={companies.phone ? '' : styles.elementHidden}
              >
                <Image height={20} width={20} src={phone} alt='phone' />
                <span className={styles.text}>Phone</span>
              </li>
              <li
                onClick={changeModalState}
                className={companies.email ? '' : styles.elementHidden}
              >
                <Image height={20} width={20} src={mail} alt='email' />
                <span className={styles.text}>Email</span>
              </li>
              <li
                onClick={changeModalState}
                className={companies.website ? '' : styles.elementHidden}
              >
                <Image height={20} width={20} src={website} alt='website' />
                <span className={styles.text}>Website</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            companies.partners.length > 0 ? styles.founders : styles.foundersNon
          }
        >
          Founders of the company:
          {companies.partners.map((el: string) => (
            <span key={el}>{el}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
