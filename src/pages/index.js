import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

//picture
import iconPicture from '@site/static/img/iconBig.jpg';

export default function Home() {
  return (
    <Layout title={`Home`}>
      <div className="centered">
        <img className='circleImage' src={iconPicture} alt="My Icon" style={{ maxHeight: 500, maxWidth: 500, }} />
        <h1 className="hero__title">{"Hey there name's Jacob"}</h1>
        <h2>Welcome to my my little corner of the internet</h2>
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
