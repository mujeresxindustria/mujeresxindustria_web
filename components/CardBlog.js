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

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(45deg, #e0e0e0 30%, #cfe1f4 60%)',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        boxShadow: ' -1px 10px 14px 3px rgba(0,0,0,0.4)',

    },
    cardContent: {
        flexGrow: 1,
        textAlign: 'justify',
        paddingBottom: '0px',
    },
}));

const CardBlog = () => {
    const cards = dataTeams;
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <Paper elevation={3}>
                                <CardMedia className={classes.cardMedia} image={card.image} title="Image title" />
                            </Paper>
                            <CardContent className={classes.cardContent}>
                                <Typography style={{ textAlign: 'center' }} gutterBottom variant="h5" component="h2">
                                    {card.name}
                                </Typography>
                                <Typography>
                                    {card.text}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }} >
                                <IconButton>
                                    More
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
export default CardBlog;