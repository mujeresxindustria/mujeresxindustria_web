import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  firstContainer: {
    padding: theme.spacing(8, 0, 4),
  },
  imagen: {
    "@media (max-width: 825px)": {
      display: "none ",
    },
  },
}));

const Contacto = () => {
  const classes = useStyles();
  return (
    <div className={classes.firstContainer}>
      <Container>
        <Typography
          style={{ fontWeight: "bold", marginBottom: "2rem" }}
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
        >
          Ponete en contacto con nosotros
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              className={classes.imagen}
              item
              container
              style={{
                width: "auto",
                textAlign: "center",
              }}
            >
              <img
                src="/images/mujer-contacto.png"
                alt="MXI logo"
                style={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  height: 800,
                  backgroundSize: "cover",
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm
              container
              style={{
                fontWeight: 700,
                padding: "12px",
                flexGrow: 0,
                justifyContent: "center",
                // overflowY: "hidden",
              }}
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfQji2QPxGgiBhXl1zzugRhvUnrVwbJnNjqP9Hd1577Oe3ncw/viewform?embedded=true"
                width="600"
                height="850"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Cargando…
              </iframe>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Contacto;
