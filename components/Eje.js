import React from "react";
import CardEje from "./CardEje";
import { Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import mas from "../public/images/mision-icons/mas.png";

export default function Eje() {
  return (
    <>
      <Container
        style={{
          width: "100%",
          margin: "60px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          style={{
            fontWeight: 500,
            padding: 25,
            textAlign: "center",
          }}
        >
          <b>Nuestros Ejes</b>
        </Typography>

        <Grid
          container
          item
          xs={12}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction="row"
          justifyContent="center"
          style={{
            padding: "3% 3%",
            boxSizing: "border-box",
          }}
        >
          <CardEje
            item
            // xs={3}
            icono={mas}
            cardTitulo="MUJERES PRESENTES"
            cardParrafo="Más presencia de las mujeres en todos los espacios productivos"
            href="/quienesSomos/#ejeuno"
          ></CardEje>

          <CardEje
            item
            // xs={3}
            icono={mas}
            cardTitulo="MUJERES PROVEEDORAS"
            cardParrafo="Más mujeres emprendedoras como proveedoras de la industria"
            href="/quienesSomos/#ejedos"
          />

          <CardEje
            item
            // xs={3}
            icono={mas}
            cardTitulo="MUJERES EN PODER"
            cardParrafo="Más mujeres en poder de decisión en todas las áreas"
            href="/quienesSomos/#ejetres"
          />
        </Grid>
      </Container>
    </>
  );
}
