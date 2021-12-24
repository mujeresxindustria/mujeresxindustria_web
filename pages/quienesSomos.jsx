import React from "react";
import TimeLine from "../components/TimeLine";
import CardsTeam from "../components/Team/CardsTeam";
import CardImage from "../components/CardImage";
import Vision from "../components/Vision";
import EjesCards from "../components/EjesCards";

import { Container, Grid, Typography } from "@material-ui/core";


const quienesSomos = () => {
    return (
        <main>
            <Vision />
            <EjesCards />
            <Typography variant="h3" component="h1" align='center'><b>Nuestra Historia</b></Typography>
            <Grid item sm={12} md={12} style={{ margin: "20px", padding: "20px" }}>
                <TimeLine style={{ padding: '20px' }} />
            </Grid>
            <CardImage />
            <Container>
                <CardsTeam />
            </Container>
        </main>
    );
};

export default quienesSomos;
