import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import RandomQuote from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}>
        <div className="homepage">
        <img
            alt = 'Docusaurus with Keytar'
            className={styles.heroLogo}
            src= {'@site/static/img/iconSmall.jpg'}
            width="200"
            height="200"
          />
          <h1 className="hero__title">{"Hey there name's Jacob"}</h1>
          <RandomQuote/>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/projects/">
              See what I've been up to
            </Link>
          </div>
        </div>
    </Layout>
  );
}
