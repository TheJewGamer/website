import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import RandomQuote from '@site/src/components';

export default function AboutMe() {
    return (
        <Layout>
            <h1 className='header'>About Me</h1> 
            <section className='aboutUsCenter'>
                {/*depending on screen size make the page split top to bottom or side to side*/}
                <div className='splitscreenDesktop splitscreenMobile'>
                    {/*left/top side*/}
                    <div className='centered'>
                        <h1>Put Picture here</h1>
                        {/*quote stuff*/}
                        <RandomQuote />
                    </div>
                    
                    {/*right/bottom side*/}
                    <div>
                        <h2>So as I said name's Jacob</h2>
                        <p>I somehow got a CS (Computer Science) degree which I now use to create mods, games, and other stuff that most likely shouldn’t exist and is usually to the detriment of my friends. I don’t take myself too seriously, which you can most likely tell from the stuff I create. For work I currently work in IT which involves a lot more replacing batteries and shouting at printers than you would think. It also makes me the go to person in my family or friend group whenever there is an issue. Which isn’t too bad usually as I get to laugh at my friends when the reason their computer randomly shut off and won’t turn on is that they kicked their powerstrip. Anyways I’ve rambled enough here to feel free to stick around on the site and check out my projects or if you want a more professional view of my please check out my LinkedIn. Thanks for stopping by and see you around maybe, and if not have a good life.</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}