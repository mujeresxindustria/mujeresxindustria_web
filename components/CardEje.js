import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "30%",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    minWidth: "30%",
    borderRadius: "50%",
    margin: "10px",
    backgroundColor: "#e0e0e0",
    justifyContent: "space-around",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "all .3s ease 0s,height 0s ease 0s",
      filter: "grayscale(80%)",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0.9rem 2.5rem",
      minWidth: "50%",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0.9rem 2rem",
      minWidth: "50%",
      justifyContent: "space-around",
    },
  },
  titulo: {
    boxSizing: "border-box",
    margin: "10px 0px 10px 0px",
    textAlign: "center",
    color: "#4674a2",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
    },
  },
  parrafo: {
    boxSizing: "border-box",
    padding: "25px 30px 25px",
    textAlign: "center",
    fontSize: "17px",
    color: "#4674a2",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 35px",
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 25px",
      fontSize: "1rem",
    },
  },
  img: {
    backgroundColor: "#c1338f",
    borderRadius: "50% ",
    minHeight: "80% !important",
    minWidth: "80% !important",
    [theme.breakpoints.down("sm")]: {
      minHeight: "65% !important",
      minWidth: "65% !important",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "45% !important",
      minWidth: "45% !important",
      margin:'0px',
      padding:'0px'
    },
  },
}));

export default function CardEje({ href, icono, cardTitulo, cardParrafo }) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={3} variant="outlined" className={classes.grid}>
        <a href={href} style={{ textDecoration: "none" }}>
          <CardContent>
            <CardMedia
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                alt="nombre del icono"
                src={icono}
                className={classes.img}
              />
            </CardMedia>
            <Typography variant="h5" component="h4" className={classes.titulo}>
              {cardTitulo}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.parrafo}
              style={{}}
            >
              {cardParrafo}
            </Typography>
          </CardContent>
        </a>
      </Grid>
    </>
  );
}
