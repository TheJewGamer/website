import React from 'react';
import Link from '@docusaurus/Link';
import RandomQuote from '@site/src/components';
import useBaseUrl from "@docusaurus/useBaseUrl";

//picture
import iconPicture from '@site/static/img/iconBig.jpg';

//css
import styles from '@site/src/css/businessCard.module.css'

export default function businessCard() {
  return (
    <div className="centered">
      <img className='circleImage' src={iconPicture} alt="My Icon" />
      <h1 className="hero__title">{"Jacob Cohen"}</h1>
      <RandomQuote />

      <div className={styles.fadeAnimation}>
        {/*Website Button*/}
        <div className='buttonCenter'>
          <Link
            className="buttonsStyle"
            to={useBaseUrl("/")}>
            My Website
          </Link>
        </div>

        <br /> {/*Line break so there is space in between for the buttons*/}

        {/*LinkedIn Button*/}
        <div className='buttonCenter'>
          <Link
            className="buttonsStyle"
            to="https://www.linkedin.com/in/jcohen120/">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
