import Carousel from "react-material-ui-carousel";
import {
  Box,
  Paper,
  Button,
  makeStyles,
  withStyles,
  Typography,
} from "@material-ui/core";

const items = [
  {
    title: "Mujeres por la Industria",
    description:
      "Nuestro objetivo es promover la igualdad de oportunidades para las mujeres en todos los ámbitos productivos para que tengan más acceso, conexiones y más visibilidad",
    image: "/images/carousel/slide-01.jpg",
  },
  {
    subtitle: "Mujeres en Producción",
    description: "Más mujeres en todos los espacios productivos",
    image: "/images/carousel/slide-02.jpg",
  },
  {
    subtitle: "Mujeres Proveedoras",
    description: "Más mujeres emprendedoras como proveedoras de la industria",
    image: "/images/carousel/slide-03.jpg",
  },
  {
    subtitle: "Mujeres en Decisión",
    description: "Más mujeres en poder de decisión en todas las áreas",
    image: "/images/carousel/slide-04.jpg",
  },
];

const CarouselComp = () => {
  return (
    <Carousel
      indicators={true}
      autoPlay={true}
      reverseEdgeAnimationDirection={false}
      swipe={false}
      animation="slide"
      interval="5000"
      navButtonsAlwaysVisible={true}
      indicatorContainerProps={{
        style: {
          marginTop: "-60px",
          marginBottom: "10px",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  const classes = useStyles();
  return (
    <Paper
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
      square
    >
      <StyledBox
        style={{ backgroundImage: `url(${props.item.image})` }}
      ></StyledBox>
      <div className={classes.texto}>
        <Typography
          className={classes.titulo}
          component="h1"
          variant="h1"
          align="center"
        >
          {props.item.title}
        </Typography>
        <div className={classes.caja}>
          <h3 className={classes.h3}>{props.item.subtitle}</h3>
          {props.item.description}
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            href="contacto"
            className={classes.boton}
          >
            Quiero Ayudar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href="contacto"
            className={classes.boton}
          >
            Quiero Ayuda
          </Button>
        </div>
      </div>
    </Paper>
  );
};

const StyledBox = withStyles((theme) => ({
  root: {
    width: "100%",
    height: "90vh",
    top: "100px",
    margin: 0,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "&::after": {
      content: "''",
      display: "block",
      width: "100%",
      height: "90vh",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  },
}))(Box);

const useStyles = makeStyles((theme) => ({
  titulo: {
    marginTop: "-40px",
    fontSize: "4rem",
    fontFamily: "Quicksand !Important",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.9rem",
      marginBottom: "-10px",
    },
  },
  texto: {
    position: "absolute",
    top: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  h3: {
    fontSize: "2rem",
    marginTop: "20px",
  },
  caja: {
    color: "#ffffff",
    padding: "15px",
    fontSize: "1.5rem",
    fontWeight: "400",
    textAlign: "center",
    maxWidth: "900px",
    minHeight: "200px",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
  },
  boton: {
    margin: theme.spacing(2),
    fontSize: "1.2rem",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}));
export default CarouselComp;
