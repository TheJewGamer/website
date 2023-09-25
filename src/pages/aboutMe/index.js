import React from 'react';
import Layout from '@theme/Layout';
import RandomQuote from '@site/src/components';
import Link from '@docusaurus/Link';

//picture
import profilePicture from '@site/static/img/picture.jpg';

//css
import styles from '@site/src/css/aboutMe.module.css';

export default function AboutMe() {
    return (
        <Layout title='About Me'>
            <h1 className='header'>About Me</h1>
            {/*depending on screen size make the page split top to bottom or side to side*/}
            <div className={styles.splitscreenDesktop}>
                {/*left/top side*/}
                <div className='centered'>
                    <img className='circleImage' src={profilePicture} alt="Me" />
                    {/*quote stuff*/}
                    <div className={styles.quoteContainer}>
                        <RandomQuote />
                    </div>
                </div>

                {/*right/bottom side*/}
                <div className={styles.blockCenter}>
                    <div className={styles.mobilePadding}>
                        <h2>So as I said name's Jacob</h2>
                        <p>I somehow got a CS (Computer Science) degree which I now use to create mods, games, and other stuff that most likely shouldn’t exist and is usually to the detriment of my friends. I don’t take myself too seriously, which you can most likely tell from the stuff I create. For work, I currently work in IT which involves a lot more replacing batteries and shouting at printers than you would think. It also makes me the go-to person in my family or friend group whenever there is an issue with technology. Anyways I’ve rambled enough here so feel free to stick around and check out my projects or if you want a more professional view of me, please check out my LinkedIn using the buttons below. Thanks for stopping by and I will see you around, and if not have a good life.</p>
                    </div>

                    <div className='buttonCenter'>
                        <Link
                            className="buttonsStyle"
                            to="/projects/">
                            Projects
                        </Link>
                    </div>

                    <br/>

                    <div class='buttonCenter'>
                        <Link
                            className="buttonsStyle"
                            to="https://www.linkedin.com/in/jcohen120/">
                            LinkedIn
                        </Link>
                    </div>

                    <br/>

                </div>
            </div>
        </Layout>
    );
}