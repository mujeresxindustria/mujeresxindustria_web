import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(8, 0, 4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 0,
    padding: "0 0 15px 0",
  },
  paper: {
    height: "5rem",
    padding: theme.spacing(0),
    margin: "0.5rem",
    objectFit: "contain",
    textAlign: "center",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },
  div1: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    width: "60%",
    justifyContent: "center",
    alignSelf: "center",
  },
  img: {
    width: "120px",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const logosApoyo = [
  {
    img: "/images/logos-alianzas/01-wise.png",
    title: "WISE",
  },
  {
    img: "/images/logos-alianzas/02-ayb.png",
    title: "Arthur & Bernard ",
  },
  {
    img: "/images/logos-alianzas/03-ahk.jpg",
    title: "AHK Argentina",
  },
];

const logosAlianzas = [
  {
    img: "/images/logos-alianzas/04-ada.png",
    title: "Ada ITW",
  },
  {
    img: "/images/logos-alianzas/05-emp.png",
    title: "EMP Consulting",
  },
  {
    img: "/images/logos-alianzas/06-spot.png",
    title: "Spot of Solutions",
  },
  {
    img: "/images/logos-alianzas/07-growthA.png",
    title: "GrowthA",
  },
  {
    img: "/images/logos-alianzas/08-mx+.png",
    title: "Mujeres por Más",
  },
];

const Alianzas = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container item spacing={4} className={classes.container} xs={12}>
        <Typography variant="h5" align="center" color="textSecondary">
          Nos Apoyan:
        </Typography>
        <div className={classes.div1}>
          {logosApoyo.map((logo, index) => (
            <Grid
              item
              key={index}
              xs={8}
              sm={4}
              md={2}
              className={classes.paper}
            >
              <img src={logo.img} alt={logo.title} className={classes.img} />
            </Grid>
          ))}
        </div>
      </Grid>
      <Grid container item spacing={4} className={classes.container} xs={12}>
        <Typography variant="h5" align="center" color="textSecondary">
          Nuestras Alianzas:
        </Typography>
        <div className={classes.div1}>
          {logosAlianzas.map((logo, index) => (
            <Grid
              item
              key={index}
              xs={8}
              sm={4}
              md={2}
              className={classes.paper}
            >
              <img src={logo.img} alt={logo.title} className={classes.img} />
            </Grid>
          ))}
        </div>
      </Grid>
    </div>
  );
};

export default Alianzas;
