import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { styled } from "@material-ui/core";

const Grid = styled("grid")({
  width: "22%",
  backgroundColor: "#c1338f",
  minWidth: 260,
  margin: "10px auto",
  "&:hover": {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    transform: "scale(1.05)",
    backgroundColor: "#4674a2",
    transition: "all .5s ease-in-out",
  },
});

export default function CardMision({ icono, cardTitulo, cardParrafo }) {
  return (
    <>
      <Grid container item xs={12} sm={2} variant="outlined">
        <CardContent>
          <Typography
            variant="h5"
            component="h4"
            style={{
              color: "#fff",
              boxSizing: "border-box",
              height: "50px",
              textAlign: "center",
            }}
          >
            {cardTitulo}
          </Typography>
          <CardMedia
            style={{ display: "flex", justifyContent: "center", padding: 25 }}
          >
            <Image alt="nombre del icono" src={icono} />
          </CardMedia>
          <Typography
            variant="body2"
            component="p"
            style={{
              color: "#fff",
              height: 270,
              boxSizing: "border-box",
              padding: "20px 26px 20px",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            {cardParrafo}
          </Typography>
        </CardContent>
      </Grid>
    </>
  );
}
