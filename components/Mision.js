import React from "react";
import CardMision from "./CardMision.js";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import conectar from "../public/images/mision-icons/01-conectar.png";
import articular from "../public/images/mision-icons/02-articular.png";
import visibilizar from "../public/images/mision-icons/03-visibilizar.png";
import acompañar from "../public/images/mision-icons/04-acompaniar.png";

const theme = createTheme();

theme.typography.h3 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "3rem",
  },
};

export default function Mision() {
  return (
    <>
      <Container
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ThemeProvider theme={theme}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "flex-end",
              alignItems: "end",
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
              <b>Nuestra Misión</b>
            </Typography>
            <iframe
              src="https://giphy.com/embed/jRetePLDf3khTZDBUl"
              width="20%"
              height="auto"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </ThemeProvider>

        <Grid
          container
          direction="row"
          style={{
            padding: "3% 3%",
            boxSizing: "border-box",
            height: "auto",
          }}
        >
          <CardMision
            cardTitulo="CONECTAR"
            icono={conectar}
            cardParrafo="Desde hace muchos años estamos en el mundo corporativo, gremial, sector público, universidad e industrial. Consideramos que como conectoras podemos impulsar a muchas mujeres con potencial."
          />

          <CardMision
            cardTitulo="ARTICULAR"
            icono={articular}
            cardParrafo="Alineados con el ODS17 creemos en las alianzas para lograr resultados y trabajamos con todo el ecosistema para generar real impacto social."
          />

          <CardMision
            cardTitulo="VISIVILIZAR"
            icono={visibilizar}
            cardParrafo="Tan importante como la gestión de ellas mismas, muchas mujeres realizan acciones increíbles pero pocos saben, incentivamos a mejorar su comunicación y autopromoción."
          />

          <CardMision
            cardTitulo="ACOMPAÑAR"
            icono={acompañar}
            cardParrafo="Escuchándolas, monitoreándolos e impulsándolas lograremos que más mujeres multipliquen oportunidades en diferentes industrias, espacios de poder y áreas productivas."
          />
        </Grid>
      </Container>
    </>
  );
}
