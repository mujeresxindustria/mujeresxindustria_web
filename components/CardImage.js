import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Link } from '@material-ui/core';

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(blue[600]),
        backgroundColor: blue[700],
        '&:hover': {
            backgroundColor: blue[900],
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    image: {
        backgroundImage: 'url(https://cdn.dribbble.com/users/43762/screenshots/3347732/media/b1b4acff57467061278bc9130f673277.gif)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#cfe1f4',
        padding: '20px',
        height: '300px',
        [theme.breakpoints.down("sm")]: {
            padding: "10px",
            height: '50%',
          },
    },
    button: {
        marginTop: '15px',
        textAlign: 'center'
    }
}));

const CardImage = () => {
    const classes = useStyles();

    return (
        <Grid container >
            <Grid item xs={false} sm={4} md={5} className={classes.image} />
            <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square className={classes.box} style={{ textAlign: 'justify' }}>
                <Typography variant="h3" component="h1" fontWeight="fontWeightBold" style={{ margin: '10px', textAlign: 'center', color: '#4674a2' }}>
                    <b>Nuestro Equipo</b>
                </Typography>
                <Typography variant="h7" style={{ margin: '10px' }}>
                    Somos un grupo de voluntarias con diferente formación académica, carreras profesionales, edades y
                    experiencias de vida. Aunamos fuerzas para ayudar a que haya más mujeres en todos los espacios productivos,
                    profesionales y de decisión. Nos moviliza la necesidad y las ganas de integrar la visión femenina en todos
                    los espacios para enriquecerlos, darles más propósito y significado, y ayudarlos a crecer de forma más integradora y humana.
                    <div className={classes.button}>
                        <ColorButton size="medium" variant="contained" color="primary">
                            <Link href="/contacto" color="inherit">Sumá tu ONG</Link>
                        </ColorButton>
                    </div>
                </Typography>
            </Grid >
        </Grid >
    );
}
export default CardImage;