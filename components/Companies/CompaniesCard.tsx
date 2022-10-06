import React, { useCallback } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useInformer } from 'context/index';

import Companies from 'types/companies';

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

  const selectCompany = useCallback((el: Companies) => {
    setSelectedCompany(el);
    setSearch('');
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.companiesCard}>
        <div className={styles.cardMainInfo}>
          <div className={styles.cardPhoto}>
            {companies.name
              .split(/[\s,.-]+/)
              .filter((word: string) => word.length > 3)
              .map((word: string) => word[0])
              .join('')}
          </div>
          <div className={styles.cardTitle}>
            <Link href={'/company/[id]'} as={`/company/${companies.id}`}>
              <a onClick={() => selectCompany(companies)}>{companies.name}</a>
            </Link>
            <div>{companies.location}</div>
          </div>
        </div>

        <div className={styles.cardSecondInfo}>
          <ul className={styles.leftColumn}>
            <li className={styles.columnEl}>
              IDNO:
              <span className={styles.columnEltext}>{companies.idno}</span>
            </li>
            <li className={styles.columnEl}>
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
            <li className={styles.columnEl}>
              Date of establishment:
              <span className={styles.columnEltext}>
                {companies.creation_year}
              </span>
            </li>
            <li className={styles.columnEl}>
              Age:
              <span className={styles.columnEltext}>
                {new Date().getFullYear() - companies.creation_year} years
              </span>
            </li>
          </ul>
          <ul className={styles.midlColumn}>
            <li className={styles.columnEl}>
              Nr. by the employees:
              <span className={styles.columnEltext}>
                {companies.employees ? companies.employees : '---'}
              </span>
            </li>
            <li className={styles.columnEl}>
              Turnover :
              <span className={styles.columnEltext}>
                {companies.turnover ? ` ${companies.turnover}  MLD` : '---'}
              </span>
            </li>
            <li className={styles.columnEl}>
              Industry :
              <span className={styles.columnEltext}>
                {companies.industry ? companies.industry : '---'}
              </span>
            </li>
          </ul>
          <div className={styles.rightColumn}>
            <div className={styles.rigtColumnTitle}> Contacts: </div>
            <ul className={styles.rightColumnList}>
              <li
                onClick={changeModalState}
                className={
                  companies.mobile ? styles.contactActive : styles.contactHidden
                }
              >
                <Image height={20} width={20} src={mobile} alt='mobile' />
                <span className={styles.contactName}>Phone mobile</span>
              </li>
              <li
                onClick={changeModalState}
                className={
                  companies.phone ? styles.contactActive : styles.contactHidden
                }
              >
                <Image height={20} width={20} src={phone} alt='phone' />
                <span className={styles.contactName}>Phone</span>
              </li>
              <li
                onClick={changeModalState}
                className={
                  companies.email ? styles.contactActive : styles.contactHidden
                }
              >
                <Image height={20} width={20} src={mail} alt='email' />
                <span className={styles.contactName}>Email</span>
              </li>
              <li
                onClick={changeModalState}
                className={
                  companies.website
                    ? styles.contactActive
                    : styles.contactHidden
                }
              >
                <Image height={20} width={20} src={website} alt='website' />
                <span className={styles.contactName}>Website</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            companies.partners.length > 0
              ? styles.founders
              : styles.foundersNone
          }
        >
          Founders of the company:
          {companies.partners.map((el: string) => (
            <span className={styles.founder} key={el}>
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
