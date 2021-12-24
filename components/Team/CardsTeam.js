import React from 'react';
//Material components
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';

//Material Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

//Data Teams Cards
import dataTeams from './dataTeams';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#e0e0e0',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
    },
    cardMedia: {
        paddingTop: '100%', // 16:9
        boxShadow: ' -1px 8px 8px 2px rgba(0,0,0,0.4)',
    },
    cardContent: {
        flexGrow: 1,
        textAlign: 'justify',
        paddingBottom: '0px',
    },
}));

const CardsTeam = () => {
    const elements = dataTeams;
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {elements.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <Paper elevation={3}>
                                <CardMedia className={classes.cardMedia} image={card.image} title={card.title} />
                            </Paper>
                            <CardContent className={classes.cardContent}>
                                <Typography style={{ textAlign: 'center' }} gutterBottom variant="h5" component="h2">
                                    {card.name}
                                </Typography>
                                <Typography style={{ textAlign: 'center' }}>
                                    {card.text}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }} >
                                {card.Instagram &&
                                    <IconButton>
                                        <Link href={card.Instagram} color="inherit" target="_blank">
                                            < InstagramIcon style={{ color: '#4674a2' }} />
                                        </Link>
                                    </IconButton>
                                }
                                {card.Twitter &&
                                    <IconButton>
                                        <Link href={card.Twitter} color="inherit" target="_blank">
                                            <TwitterIcon style={{ color: '#4674a2' }} />
                                        </Link>
                                    </IconButton>
                                }
                                {card.LinkedIn &&
                                    <IconButton href={card.LinkedIn} color="inherit" target="_blank">
                                        <LinkedInIcon style={{ color: '#4674a2' }} />
                                    </IconButton>
                                }
                                {card.YouTube &&
                                    <IconButton>
                                        <Link href={card.YouTube} color="inherit" target="_blank">
                                            <YouTubeIcon style={{ color: '#4674a2' }} />
                                        </Link>
                                    </IconButton>
                                }
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
}
export default CardsTeam;