import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

//picture
import iconPicture from '@site/static/img/iconBig.jpg';

export default function Home() {
  return (
    <Layout title={`Home`}>
      <div className="centered">
        <img className='circleImage' src={iconPicture} alt="My Icon"/>
        <h1 className="hero__title">{"Hey there name's Jacob"}</h1>
        <h2>Welcome to my little corner of the internet</h2>
        <div className='buttonCenter'>
          <Link
            className="buttonsStyle"
            to="/aboutMe/">
            Explore
          </Link>
        </div>
      </div>
    </Layout>
  );
}
