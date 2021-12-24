import React from "react";
import {
  Card,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  firstContainer: {
    backgroundImage: "url(/images/blue-lines.png)",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: theme.spacing(8, 0, 4),
  },
  secondContainer: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    backgroundColor: "transparent",
    paddingBottom: theme.spacing(8),
  },
  cardImg: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  card: {
    display: "flex",
    marginTop: "2rem",
  },
}));

const cards = [
  {
    img: "/images/ods-icons/04-educacion.png",
    title: "Educacion de Calidad",
  },
  {
    img: "/images/ods-icons/05-igualdad-genero.png",
    title: "Igualdad de Genero",
  },
  {
    img: "/images/ods-icons/10-reduc-desigualdad.png",
    title: "Reducción de Desigualdades",
  },
  {
    img: "/images/ods-icons/16-paz.png",
    title: "Paz, Justicia e Instituciones Sólidas",
  },
  {
    img: "/images/ods-icons/17-alianzas.png",
    title: "Alianzas para Lograr Objetivos",
  },
];

const Vision = () => {
  const classes = useStyles();

  return (
    <div style={{ paddingBottom: "2rem", backgroundColor: '#ffffff' }}>
      <div className={classes.firstContainer}>
        <Container maxWidth="lg">
          <Typography
            style={{ fontWeight: "bold", marginBottom: "2rem" }}
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            ¿Quiénes Somos?
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Somos personas comprometidas con la igualdad de oportunidades. Luego
            de participar en cámaras, parques industriales y eventos
            corporativos, vimos que había escasa participación de las Mujeres.
            Eso nos motivó a crear <b>Mujeres por la Industria</b>, para darle
            visibilidad a la problemática mundial de la falta de participación
            de mujeres en estos espacios.
          </Typography>
        </Container>
        <div className={classes.secondContainer}>
          <Grid container spacing={2}>
            <div className={classes.card}>
              <Container maxWidth="sm" style={{ margin: "1.5rem" }}>
                <Grid item style={{ marginTop: "30px" }}>
                  <Typography
                    style={{ fontWeight: "bold" }}
                    component="h1"
                    variant="h3"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    Visión
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph
                  >
                    Ser un espacio de conexión y articulación a nivel regional
                    como referentes de empoderamiento tecnológico e innovación
                    social.
                  </Typography>
                </Grid>
              </Container>
            </div>
          </Grid>
        </div>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Aplicamos en los siguientes Objetivos de Desarrollo Sostenible
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item key={index} xs={6} sm={4} md={2}>
              <Card className={classes.cardImg}>
                <img src={card.img} alt={card.title} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Vision;
