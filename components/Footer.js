import React from "react";
import Logo from "./Logo";
//Components
import { Grid, Link } from "@material-ui/core";
// Material Icons
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";

const Footer = () => {
  return (
    <footer style={{
      background: "#4674a2",
      color: '#e0e0e0',
      boxShadow: "1px 1px 1px 0.5px rgba(70,116,162,0.6)",
      padding: '20px'
    }}>
      <Grid container style={{ justifyContent: "center", textAlign: "center" }}>
        <Grid style={{ marginTop: '15px' }} item sm={4}>
          <Logo />
          <div style={{ fontSize: '15px', marginLeft: '18px', marginBottom: '20px' }} >
            Organización social sin fines de lucro.
          </div>
        </Grid>
        {/* Accesos web */}
        <Grid item xs={12} sm={4}>
          <div style={{ paddingTop: '15px', paddingBottom: '2px' }}  > <b>ACCESOS RAPIDOS</b></div>
          <Link href="https://emprenderenfemenino.com.ar/web/" color="inherit" target="_blank" >
            <Grid container direction="row" alignItems="center" style={{ paddingTop: '15px', justifyContent: "center", textAlign: "center" }}>
              <Grid item >
                <LanguageIcon />
              </Grid>
              <Grid item>
                &nbsp; Emprender en Femenino
              </Grid>
            </Grid>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* Redes */}
          <div style={{ paddingTop: '15px', paddingBottom: '2px' }}> <b>NUESTRAS REDES SOCIALES</b></div>
          <Link href="https://www.instagram.com/mujeresxindustria/" color="inherit" target="_blank" >
            <InstagramIcon style={{ margin: "7px", fontSize: "1.4rem" }} />
          </Link>
          <Link href="https://twitter.com/EmprendeFem" color="inherit" target="_blank">
            <TwitterIcon style={{ margin: "7px", fontSize: "1.4rem" }} />
          </Link>
          <Link href="https://www.linkedin.com/groups/12139183/" color="inherit" target="_blank">
            <LinkedInIcon style={{ margin: "7px", fontSize: "1.4rem" }} />
          </Link>
          {/* Contacto */}
          <div style={{ paddingTop: "20px", paddingBottom: "2px" }}>
            <b>CONTACTO</b>
          </div>
          <Grid container direction="row" alignItems="center" style={{ paddingTop: "15px", justifyContent: "center", textAlign: "center" }}>
            <Grid item>
              <RoomIcon />
            </Grid>
            <Grid item>&nbsp; Calle 9 (CP 1761), Fátima,</Grid>
            <Grid item>&nbsp; Parque Industrial Pilar.</Grid>
            <Grid item style={{ paddingLeft: "30px" }}>
              &nbsp;Ruta 8 km 60 - Buenos Aires
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" style={{ paddingTop: "15px", justifyContent: "center", textAlign: "center" }}>
            <Grid item>
              <EmailIcon />
                &nbsp;
              </Grid>
            <Grid item>
              &nbsp;{" "}
              <Link href="mailto:mujeresporlaindustria@gmail.com" color="inherit" target="_blank">
                mujeresporlaindustria@gmail.com
              </Link>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" style={{ paddingTop: "15px", justifyContent: "center", textAlign: "center" }}>
            <Grid item>
              <PhoneIcon />
            </Grid>
            <Grid item>&nbsp; +54 0230 443161</Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer >
  );
};
export default Footer;
