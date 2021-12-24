import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  firstContainer: {
    padding: theme.spacing(8, 0, 4),
  },
  cardGrid: {
    padding: theme.spacing(8),
    marginTop: "3rem",
  },
  card: {
    width: "500px",
    borderRadius: "1%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "1rem",
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    color: "#ffffff",
    boxShadow: " -1px 8px 8px 2px rgba(0,0,0,0.4)",
    transition: "transform 0.13s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  titleCards: {
    fontFamily: "Quicksand !Important",
  },
  containerAlianzas: {
    backgroundColor: "#ffffff",
    boxShadow: " -1px 8px 8px 2px rgba(0,0,0,0.4)",
    padding: "1.5rem",
    marginBottom: "3rem",
    justifyContent: "center",
    alignItems:'center'
  },
  tituloAlianzas:{
    fontWeight: "bold",
    margin: "7rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.4rem",
      margin: "5rem 0.2rem",
    },
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
}));

const cards = [
  {
    titulo: "Empresas",
    texto: "Enfocadas en la igualdad de oportunidades en sus recursos humanos.",
  },
  {
    titulo: "Mujeres",
    texto: "Animadas a capacitarse y a luchar por sus sueños.",
  },
  {
    titulo: "Gobierno",
    texto:
      "Aunar esfuerzos, trabajar con todos los ministerios es fundamental.",
  },
];

const alianzas = [
  {
    titulo: "Proyecto #1000 Notebooks",
    texto:
      "Para lograr que más mujeres se inserten en la tecnología o en las carreras STEM necesitamos que accedan a tecnología. Desde Mujeres por la Industria Junto a Spot Of Solutions de Estados Unidos estamos diseñando un plan de acción para comenzar con 100 pc o notebooks y lograr en principio mil y luego diez mil. ",
    img: "/images/ecosistema/laptop.jpg",
    ml: "",
  },
  {
    titulo: "Becas en IT",
    texto:
      "Postulamos candidatas a las becas de ADA ITW, la misma es para mujeres mayores de 18 años en situación de vulnerabilidad, no es necesario tener estudios universitarios completos, estar desempleada o en situación laboral informal. Ada ITW busca empoderar mujeres con formaciones intensivas en programación y habilidades blandas para poder reducir la brecha de género que prevalece en IT.",
    img: "/images/ecosistema/programacion.jpg",
  },
];

const EcosistemaComp = () => {
  const classes = useStyles();
  return (
    <div className={classes.firstContainer}>
      <Typography
        style={{ fontWeight: "bold", marginBottom: "2rem" }}
        component="h1"
        variant="h3"
        align="center"
        color="textPrimary"
      >
        Ecosistema
      </Typography>

      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph
          style={{ width: "100%", marginBottom: "2rem" }}
        >
          Pretendemos aportar valor al ecosistema de entidades que apoyan la
          igualdad, especialmente transmitir el entusiasmo que tenemos por
          conectar a mujeres con el ecosistema de empoderamiento y por el
          potencial transformador que tienen. Para ello debemos trabajar en
          conjunto:
        </Typography>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container item spacing={4} justifyContent="space-around">
            {cards.map((card, index) => (
              <Grid
                item
                key={index}
                xs={6}
                sm={4}
                md={2}
                className={classes.card}
                square
              >
                <h2 className={classes.titleCards}>{card.titulo}</h2>
                <p>{card.texto}</p>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
      <Typography
        className={classes.tituloAlianzas}
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Alianzas Estratégicas
      </Typography>
      {alianzas.map((alianza, index) => (
        <Container
          maxWidth="lg"
          className={classes.containerAlianzas}
          key={index}
        >
          <Grid container>
            <Grid
              item
              xs={false}
              sm={4}
              md={5}
              style={{ backgroundImage: `url(${alianza.img})` }}
              className={classes.image}
            />
            <Grid item xs={12} sm={8} md={7} elevation={6}>
              <Typography
                style={{ fontWeight: "bold" }}
                component="h1"
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {alianza.titulo}
              </Typography>
              <Typography
                variant="h6"
                style={{ margin: "2rem" }}
                color="textSecondary"
                align="justify"
              >
                {alianza.texto}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      ))}
      <Typography
        className={classes.tituloAlianzas}
        component="h1"
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Súmate a nuestro ecosistema corporativo, de voluntariado o inversor{" "}
        <br />
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="contacto"
          style={{ marginTop: "2rem", fontSize: "1.5rem" }}
        >
          Contáctanos
        </Button>
      </Typography>
    </div>
  );
};

export default EcosistemaComp;
