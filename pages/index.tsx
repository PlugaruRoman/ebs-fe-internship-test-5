import React from 'react';

import Layout from 'components/Layout';

import styles from 'styles/Home.module.scss';

const Home = () => {
  return (
    <Layout>
      <div>
        <h2 className={styles.homeText}>
          We help Republic of Moldova's companies upscale their business and
          minimize potential risks.
        </h2>
      </div>
    </Layout>
  );
};

export default Home;
