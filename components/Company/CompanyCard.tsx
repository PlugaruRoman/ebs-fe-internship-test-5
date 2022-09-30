import React from 'react';

import { useInformer } from '../../utils';

import styles from './CompanyCard.module.scss';

const CompanyCard: React.FC = () => {
  const { company } = useInformer();

  return (
    <div className={styles.companyCard}>
      <div className={styles.cardMainInfo}>
        <div className={styles.cardFoto}>
          {company
            ? company.name
                .split(/[\s,.-]+/)
                .filter((word: string) => word.length > 3)
                .map((word: string) => word[0])
                .join('')
            : ''}
        </div>
        <div className={styles.cardTitle}>
          <div className={styles.cardName}>
            {company.name}
            <span>{company.status.keyword}</span>
          </div>
          <div className={styles.cardSpecialDescription}>
            {company.general_data.special_description !== null
              ? company.general_data.special_description.title
              : '--'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
