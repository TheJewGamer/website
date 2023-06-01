import React from 'react';
import Layout from '@theme/Layout';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';

//pictures
import rulesPicture from '@site/static/projectImages/theRulesHaveChanged.jpg'
import discordBot from '@site/static/projectImages/discordBot.jpg'
import botWebsite from '@site/static/projectImages/botWebsite.png'
import personalWebsite from '@site/static/projectImages/personalWebsite.png'
import valorantWebsite from '@site/static/projectImages/valorantWebsite.png'
import ghubScript from '@site/static/projectImages/ghubScript.png'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Projects() {
    return (
        <Layout title='Projects'>
            <h1 className='header'>My Projects</h1>
            <Grid container direction={"row"} justifyContent={"center"} rowSpacing={5} columnSpacing={{ xs: 1, sm: 20, md: 50}}>
                {/*Black ops 3 mod*/}
                <Grid>
                    <Card sx={{ width: 345 }}>
                        <Link to={useBaseUrl("projects/changeTheRules")}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={rulesPicture}
                                alt="Change the Rules Logo"
                            />
                            <CardContent className='projectCard'>
                                <h1>Change The Rules</h1>
                                <p>A gameplay mod for BlackOps</p>
                            </CardContent>
                        </Link>
                    </Card>

                </Grid>

                {/*thejewbot*/}
                <Grid>
                    <Card sx={{ width: 345 }}>
                        <Link to={useBaseUrl("projects/discordBot")}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={discordBot}
                                alt="My Discord bot's logo"
                            />
                            <CardContent className='projectCard'>
                                <h1>Discord Bot</h1>
                                <p>A personal Discord bot I made</p>
                            </CardContent>
                        </Link>
                    </Card>
                </Grid>

                {/*bot website*/}
                <Grid>
                    <Card sx={{ width: 345 }}>
                        <Link to={useBaseUrl("projects/botWebsite")}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={botWebsite}
                                alt="My Discord Bot Logo"
                            />
                            <CardContent className='projectCard'>
                                <h1>Bot Website</h1>
                                <p>A website that I made for my Discord Bot.</p>
                            </CardContent>
                        </Link>
                    </Card>
                </Grid>

                {/*this website*/}
                <Grid>
                    <Card sx={{ width: 345 }}>
                        <Link to={useBaseUrl("projects/personalWebsite")}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={personalWebsite}
                                alt="Personal Website Picture"
                            />
                            <CardContent className='projectCard'>
                                <h1>My Personal Website</h1>
                                <p>My personal website that I made to show my personal projects that I have worked on.</p>
                            </CardContent>
                        </Link>
                    </Card>
                </Grid>

                {/*Valorant Strat Site*/}
                <Grid>
                    <Card sx={{ width: 345 }}>
                        <Link to={useBaseUrl("projects/valorantStratSite")}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={valorantWebsite}
                                alt="Valorant Strat Roulette Website Picture"
                            />
                            <CardContent className='projectCard'>
                                <h1>Valorant Strat Roulette Website</h1>
                                <p>A simple strat roulette website for the game Valorant.</p>
                            </CardContent>
                        </Link>
                    </Card>
                </Grid>

                {/*Logitech gHub profile adder*/}
                <Grid>
                    <Card sx={{ width: 345 }}>
                        <Link to={useBaseUrl("projects/ghubGamePass")}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={ghubScript}
                                alt="Logitech ghub Script Image"
                            />
                            <CardContent className='projectCard'>
                                <h1>gHub Gamepass Profile Creator</h1>
                                <p>A script that helps add Xbox Gamepass games to Logitech gHub.</p>
                            </CardContent>
                        </Link>
                    </Card>
                </Grid>

            </Grid>
        </Layout >
    );
}