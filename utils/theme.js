import { createTheme } from '@material-ui/core';

const theme = createTheme({
    bg: {
        Img: {
            backgroundImage:
                "url(https://us.123rf.com/450wm/peacestock123/peacestock1231904/peacestock123190400024/121275238-fondo-polivin%C3%ADlico-bajo-triangular-arrugado-geom%C3%A9trico-blanco-gris-del-gr%C3%A1fico-del-ejemplo-de-la-pen.jpg?ver=6)",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
        }
    },
    palette: {
        primary: {
            main: '#c1338f',
            light: '#e0e0e0'
        },
        secondary: {
            main: '#4674a2',
            light: '#cfe1f4',
        }
    }
});

export default theme;