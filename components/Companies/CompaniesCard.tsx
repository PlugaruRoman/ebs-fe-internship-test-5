import Image from 'next/image';

import { useInformer } from '../../utils';

import styles from './CompaniesCard.module.scss';

import mobile from '../../public/mobile.svg';
import phone from '../../public/phone.svg';
import mail from '../../public/mail.svg';
import website from '../../public/web.svg';

const CompaniesCard = ({ props }) => {
  const { selectCompany } = useInformer();

  return (
    <div
      className={
        props.partners.length > 0
          ? styles.companiesCardLong
          : styles.companiesCard
      }
    >
      <div onClick={() => selectCompany(props)} className={styles.cardMainInfo}>
        <div className={styles.cardFoto}>
          {props.name
            .split(/[\s,-]+/)
            .map((word: string) => word[0])
            .join('')}
        </div>
        <div className={styles.cardTitle}>
          <div>{props.name}</div>
          <div>{props.location}</div>
        </div>
      </div>
      <div className={styles.cardSecondInfo}>
        <ul className={styles.leftColumn}>
          <li>
            IDNO: <span> {props.idno} </span>
          </li>
          <li>
            STATUS:
            <span
              className={
                props.status === 'ACTIVE'
                  ? styles.statusActive
                  : styles.statusDeleted
              }
            >
              {' '}
              {props.status}{' '}
            </span>
          </li>
          <li>
            Date of establishment:<span> {props.creation_year} </span>
          </li>
          <li>
            Age:<span> {2022 - props.creation_year} years</span>
          </li>
        </ul>
        <ul className={styles.midlColumn}>
          <li>
            Nr. by the employees:{' '}
            <span>{props.employees ? props.employees : '---'}</span>
          </li>
          <li>
            Turnover :{' '}
            <span>{props.turnover ? `${props.turnover}  MLD` : '---'} </span>
          </li>
          <li>
            Industry : <span>{props.industry ? props.industry : '---'}</span>
          </li>
        </ul>
        <div className={styles.rightColumn}>
          <div className={styles.contacts}> Contacts: </div>
          <ul className={styles.rightColumnList}>
            <li>
              <span
                className={props.mobile ? '' : styles.rightColumnListElement}
              >
                <Image height={20} width={20} src={mobile} alt='mobile' />
                <span className={styles.text}>Phone mobile</span>
              </span>
            </li>
            <li>
              <span
                className={props.phone ? '' : styles.rightColumnListElement}
              >
                <Image height={20} width={20} src={phone} alt='phone' />
                <span className={styles.text}>Phone</span>
              </span>
            </li>
            <li>
              <span
                className={props.email ? '' : styles.rightColumnListElement}
              >
                <Image height={20} width={20} src={mail} alt='email' />
                <span className={styles.text}>Email</span>
              </span>
            </li>
            <li>
              <span
                className={props.website ? '' : styles.rightColumnListElement}
              >
                <Image
                  className={styles.imgss}
                  height={20}
                  width={20}
                  src={website}
                  alt='website'
                />
                <span className={styles.text}>Website</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          props.partners.length > 0 ? styles.founders : styles.foundersNon
        }
      >
        Founders of the company:
        {props.partners.map((el: string) => (
          <span key={el}>{el}</span>
        ))}
      </div>
    </div>
  );
};

export default CompaniesCard;
