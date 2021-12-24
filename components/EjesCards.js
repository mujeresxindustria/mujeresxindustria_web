import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    textAlign: "center",
    maxWidth: "1440px",
    padding: "55px 20px",
    flexWrap: "wrap",
    alignItems: "baseline",
    width: "100%",
    boxShadow: "0px 12px 10px -4px #cfe1f4",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    display: "flex",
  },

  img: {
    borderRadius: "5%  ",
    width: 800,
    maxWidth: "100%",
  },

  box: {
    padding: "18px",
    backgroundColor: "transparent",
  },

  separador: {
    display: "flex",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease-in 0s",
    height: "1px",
    background: "#c1338f",
    paddingBottom: "3%",
  },
  separadorLinea: {
    gridTemplateColumns: "auto max-content auto",
    width: "10%",
  },
  logo: {
    width: "100%",
  },
}));

const logo = {
  img: "/images/logo-version-01.png",
  title: "logo",
};

const logoEje = [
  {
    img: "/images/ejes/eje1.jpeg",
    title: "Eje 1",
  },
  {
    img: "/images/ejes/eje2.jpeg",
    title: "Eje 2",
  },
  {
    img: "/images/ejes/eje3.jpeg",
    title: "Eje 3",
  },
];

export default function EjesCards() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.separador}>
        <span className={classes.separadorLinea}>
          <img className={classes.logo} alt={logo.title} src={logo.img} />
        </span>
      </Grid>

      <Grid item xs style={{ marginBottom: 30 }}>
        {/* eje 1 */}

        <Container className={classes.container} id="ejeuno" style={{ backgroundColor: '#e0e0e0 !important' }}>
          <Typography gutterBottom variant="h3" component="h1">
            <b>Eje 1</b>
          </Typography>
          <Typography
            variant="h5"
            style={{
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.54)",
              marginBottom: "2rem",
            }}
          >
            más presencia de mujeres en todos los espacios productivos
          </Typography>

          <Grid container style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={false} md={6} className={classes.image}>
              <img
                className={classes.img}
                alt={logoEje[0].title}
                src={logoEje[0].img}
              />
            </Grid>
            <Grid
              item
              // xs={12}
              // sm={8}
              md={6}
              component={Paper}
              elevation={0}
              square
              className={classes.box}
              container
            >
              <Typography
                variant="h4"
                fontWeight="fontWeightBolder"
                style={{
                  textAlign: "center",
                  color: "#4674a2",
                }}
              >
                ¿Cómo lo hacemos?
              </Typography>
              <Typography
                style={{
                  margin: "10px",
                  textAlign: "left",
                  fontSize: "1.5rem",
                }}
              >
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Ofrecemos charlas on line, encuentros vía zoom para empresas
                  sobre igualdad de oportunidades.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Eventos para promover la igualdad y contar nuestra experiencia
                  con expertas por industria con referentes sociales y speakers
                  de todos los ámbitos.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Redes de promoción on line, apoyo a la imagen de las
                  compañías.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />{" "}
                  Campañas de concientización para comunicación interna.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* eje 2 */}
        <Container className={classes.container} id="ejedos">
          <Typography gutterBottom variant="h3" component="h1">
            <b>Eje 2</b>
          </Typography>
          <Typography
            variant="h5"
            style={{
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.54)",
              marginBottom: "2rem",
            }}
          >
            más emprendedoras como proveedoras de la industria
          </Typography>

          <Grid container style={{ display: "flex", alignItems: "center" }}>
            <Grid
              item
              // xs={12}
              // sm={8}
              md={6}
              component={Paper}
              elevation={0}
              square
              className={classes.box}
            >
              <Typography
                variant="h4"
                fontWeight="fontWeightBolder"
                style={{
                  textAlign: "center",
                  color: "#4674a2",
                }}
              >
                Capacitamos con acuerdos
              </Typography>
              <Typography
                style={{
                  margin: "10px",
                  textAlign: "left",
                  fontSize: "1.5rem",
                }}
              >
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Diagnóstico de las necesidades.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Formalización, redes sociales, habilidades blandas,
                  administración y finanzas.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Oficios a según la necesidad de la empresa, entidad.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Conexiones con empresas, cámaras y cooperativas.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Mentoreo.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Seguimiento.
                </p>
              </Typography>
            </Grid>
            <Grid item xs={false} md={6} className={classes.image}>
              <img
                className={classes.img}
                alt={logoEje[1].title}
                src={logoEje[1].img}
              />
            </Grid>
          </Grid>
        </Container>

        {/* eje 3 */}
        <Container className={classes.container} id="ejetres" style={{ backgroundColor: '#e0e0e0 !important' }}>
          <Typography gutterBottom variant="h3" component="h1">
            <b>Eje 3</b>
          </Typography>
          <Typography
            variant="h5"
            style={{
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.54)",
              marginBottom: "2rem",
            }}
          >
            más mujeres en poder de decisión
          </Typography>

          <Grid container style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={false} md={6} className={classes.image}>
              <img
                className={classes.img}
                alt={logoEje[2].title}
                src={logoEje[2].img}
              />
            </Grid>
            <Grid
              item
              // xs={12}
              // sm={8}
              md={6}
              component={Paper}
              elevation={0}
              square
              className={classes.box}
            >
              <Typography
                variant="h4"
                fontWeight="fontWeightBolder"
                style={{
                  textAlign: "center",
                  color: "#4674a2",
                }}
              >
                Capacitamos con acuerdos
              </Typography>
              <Typography
                style={{
                  margin: "10px",
                  textAlign: "left",
                  fontSize: "1.5rem",
                }}
              >
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Desarrollo del entorno.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Liderazgo, masters, negocios, redes sociales, habilidades
                  blandas.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Conexiones con ecosistema.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Acompañamiento y apoyo de carrera.
                </p>
                <p>
                  <TurnedInIcon
                    style={{ marginRight: "8px", color: "#4674a2" }}
                  />
                  Seguimiento de trayectoria.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
