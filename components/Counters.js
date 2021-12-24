import React from "react";
import { Container, Typography } from "@material-ui/core";
//Material Icons
import BusinessIcon from "@material-ui/icons/Business";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PublicIcon from "@material-ui/icons/Public";

import CountUp from "react-countup";

import styles from "../styles/Counter.module.css";

const Counters = () => {
  return (
    <>
      <div className={styles.counterUp}>
        <Container style={{ zIndex: "1000" }}>
          <Typography
            style={{ fontWeight: "bold", paddingTop: "20px", color: "#ffffff" }}
            component="h1"
            variant="h3"
            align="center"
          >
            Nuestro objetivo es llegar a:
          </Typography>
          <div className={styles.content}>
            <div className={styles.box}>
              <BusinessIcon style={{ fontSize: "60px", color: "#c1338f" }} />
              <div className={styles.counter}>
                <CountUp duration={3} delay={2} end={100} />
              </div>
              <div className={styles.text}>Nuevas empresas</div>
            </div>
            <div className={styles.box}>
              <GroupAddIcon style={{ fontSize: "60px", color: "#c1338f" }} />
              <div className={styles.counter}>
                <CountUp duration={3} delay={2} end={10000} />
              </div>
              <div className={styles.text}>Mujeres</div>
            </div>
            <div className={styles.box}>
              <RecordVoiceOverIcon
                style={{ fontSize: "60px", color: "#c1338f" }}
              />
              <div className={styles.counter}>
                <CountUp duration={3} delay={2} end={50} />
              </div>
              <div className={styles.text}>Primeras Referentes</div>
            </div>
            <div className={styles.box}>
              <PublicIcon style={{ fontSize: "60px", color: "#c1338f" }} />
              <div className={styles.counter}>
                <CountUp duration={3} delay={2} end={20} />
              </div>
              <div className={styles.text}>Países</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Counters;
