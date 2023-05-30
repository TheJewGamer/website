import React from 'react';
import Layout from '@theme/Layout';

//picture
import iconPicture from '@site/static/img/iconBig.jpg';

export default function Home() {
  return (
    <Layout title={`Home`}>
      <div className="centered">
        <img className='circleImage' src={iconPicture} alt="My Icon" style={{ maxHeight: 500, maxWidth: 500, }} />
        <h1 className="hero__title">{"Hey there name's Jacob"}</h1>
        <h2>Welcome to my little corner of the internet</h2>
        <h2 className="projectPageButtons"><a href="projects/" className='projectPageButtonsText'>See what I have been up to</a></h2>
      </div>
    </Layout>
  );
}
