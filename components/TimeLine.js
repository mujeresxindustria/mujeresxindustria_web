import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '8px 20px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const TimeLine = () => {
    const classes = useStyles();

    return (
        <Timeline align="alternate" style={{ margin: '0px 50px', padding: '10px 50px' }}>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="h6" color="textSecondary">
                        2018
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={4} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Agosto
                        </Typography>
                        <Typography>
                            Comienzo de beca WISE en el IAE.
                        </Typography>
                    </Paper>
                    <br />
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Septiembre
                        </Typography>
                        <Typography>
                            Creación de la Fanpage.
                        </Typography>
                        <Typography>
                            <Link to='https://www.facebook.com/mujeresporlaindustria/?ref=page_internal' >
                                Visitar
                            </Link>
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="h6" color="textSecondary">
                        2019
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Noviembre
                        </Typography>
                        <Typography>
                            Lanzamiento de Mujeres por la Industria Universidad Austral.
                        </Typography>
                        <Typography>
                            <Link to='https://emprenderenfemenino.com.ar/emprendedoras/lanzamiento-mujeres-por-la-industria/' >
                                Visitar &nbsp;
                            </Link>
                            <Link to='https://www.facebook.com/media/set/?vanity=mujeresporlaindustria&set=a.2282779761827963' >
                                Fotos
                            </Link>
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="h6" color="textSecondary">
                        2020
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Febrero
                        </Typography>
                        <Typography>
                            Lanzamiento Federal con la ONG. Mujeres a la obra Santa Fe.
                        </Typography>
                        <Typography>
                            <Link to='https://emprenderenfemenino.com.ar/eventos/lanzamiento-mujeres-por-la-industria-federal/' >
                                Visitar &nbsp;
                            </Link>
                            <Link to='https://www.facebook.com/media/set/?vanity=emprenderenfemenino&set=a.2631818223552771' >
                                Fotos
                            </Link>
                        </Typography>
                    </Paper>
                    <br />
                    <Paper elevation={4} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            8 de Marzo
                        </Typography>
                        <Typography>
                            Día de la Mujer
                        </Typography>
                    </Paper>
                    <br />
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Marzo - <b>Pandemia</b>
                        </Typography>
                        <Typography>
                            ¡Nos Reinventamos!. Caminaos junto a las circunstancias y desaprendimos muchas cosas,
                            vamos mutando con el contexto día a día.
                        </Typography>
                    </Paper>
                    <br />
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Octubre
                        </Typography>
                        <Typography>
                            Desarrollo del equipo.
                        </Typography>
                    </Paper>
                    <br />
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Noviembre
                        </Typography>
                        <Typography variant='h5'>
                            ¡ Primer Aniversario !
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="h6" color="textSecondary">
                        2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Agosto
                        </Typography>
                        <Typography>
                            Desarrollo del Blog
                        </Typography>
                        <Typography>
                            <Link to='https://mujeresporlaindustria.wordpress.com/2021/08/03/el-porque-de-este-blog/?fbclid=IwAR21_cB0i1S-jDSe7Tyld080D_fB4XFMwunCJfvefnLZDGCz7uQoRz4_kWo ' >
                                Visitar &nbsp;
                            </Link>
                        </Typography>
                    </Paper>
                    <br />
                    <Paper elevation={3} className={classes.paper}>
                        <Typography><b>Acuerdos con ADA: </b></Typography>
                        <Typography>Becas</Typography>
                        <Typography>Desarrollo Web</Typography>
                    </Paper>
                    <br />
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h7" component="h4" style={{ marginLeft: '20px' }}>
                            Conversatorio Académico Universidad de Luján
                        </Typography>
                        <TimelineOppositeContent>
                            <Typography>
                                <ul>
                                    <li>
                                        <Typography > Parques Industriales. </Typography>
                                    </li>
                                    <li>
                                        <Typography >Recursos y herramientas para emprender en pandemia.</Typography>
                                    </li>
                                    <li>
                                        <Typography > Presencia de las mujeres en espacios productivos. </Typography>
                                    </li>
                                </ul>
                            </Typography>
                        </TimelineOppositeContent>
                        <Typography>
                            <Link to='https://www.youtube.com/watch?v=z4EDD6tzkL4' >
                                Ver &nbsp;
                            </Link>
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
export default TimeLine;