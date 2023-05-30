import React from 'react';
import Layout from '@theme/Layout';
import Grid from '@mui/material/Grid';

//pictures
import rulesPicture from '@site/static/projectImages/theRulesHaveChanged.jpg'
import discordBot from '@site/static/projectImages/discordBot.jpg'
import botWebsite from '@site/static/projectImages/botWebsite.png'
import personalWebsite from '@site/static/projectImages/personalWebsite.png'

export default function Projects() {
    return (
        <Layout title='Projects'>
            <h1 className='header'>My Projects</h1>
            <div className='tableCenterMobile'>
                {/*Black ops 3 mod*/}
                <Grid container spacing={5} columns={10} direction={"row"} justifyContent={"center"}>
                    <Grid item lg={3.5} xs={12}>
                        <div className='projectImageContainer'>
                            <a href='projects/changetherules'>
                                <img src={rulesPicture} alt="The Rules Have Changed Logo" />
                                <div class="projectPictureText">
                                    <h1>Change The Rules</h1>
                                    <p>A gameplay mod for BlackOps 3 that I made.</p>
                                </div>
                            </a>
                        </div>
                    </Grid>

                    {/*thejewbot*/}
                    <Grid item lg={3} xs={12}>
                        <div className='projectImageContainer'>
                            <a href='projects/discordBot'>
                                <img src={discordBot} alt="Me" />
                                <div class="projectPictureText">
                                    <h1>Discord Bot</h1>
                                    <p>A personal Discord Bot I made.</p>
                                </div>
                            </a>
                        </div>
                    </Grid>

                    {/*bot website*/}
                    <Grid item lg={3} xs={12}>
                        <div className='projectImageContainer'>
                            <a href='projects/botWebsite'>
                                <img src={botWebsite} alt="Discord Bot Website Picture" />
                                <div class="projectPictureText">
                                    <h1>Discord Bot Website</h1>
                                    <p>A website that I made for my Discord Bot.</p>
                                </div>
                            </a>
                        </div>
                    </Grid>

                    {/*this website*/}
                    <Grid item lg={3} xs={12}>
                        <div className='projectImageContainer'>
                            <a href='projects/personalWebsite'>
                                <img src={personalWebsite} alt="Personal Website Picture" />
                                <div class="projectPictureText">
                                    <h1>My Personal Website</h1>
                                    <p>My personal website that I made to show my personal projects that I have worked on.</p>
                                </div>
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
}