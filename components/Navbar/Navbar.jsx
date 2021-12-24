import Link from "next/link";
import {
  AppBar,
  Tab,
  Toolbar,
  useMediaQuery,
  useTheme,
  withStyles,
} from "@material-ui/core";
import { BiDonateHeart } from "react-icons/bi";
import { GoHome, GoInfo } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";

import DrawerComponent from "./DrawerComponent";

const StyledTab = withStyles(() => ({
  root: {
    color: "white",
    "&:focus": {
      borderBottom: "3px solid #c3defa",
    },
  },
}))(Tab);

const Navbar = () => {
  //   BREAKPOINTS
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        <Link href="/">
          <a>
            <img src="/images/logo-version-01.png" alt="Logo" width="80px" />
          </a>
        </Link>
        <div style={{ flexGrow: "1" }}></div>
        {isMatch ? (
          <DrawerComponent />
        ) : (
          <>
            <Link href="/">
              <StyledTab
                icon={<GoHome style={{ fontSize: "1.4rem" }} />}
                label="Home"
              />
            </Link>
            <Link href="/quienesSomos">
              <StyledTab
                icon={<GoInfo style={{ fontSize: "1.4rem" }} />}
                label="¿Quiénes Somos?"
              />
            </Link>
            <Link href="/ecosistema">
              <StyledTab
                icon={<BiDonateHeart style={{ fontSize: "1.4rem" }} />}
                label="Ecosistema"
              />
            </Link>
            <Link href="/blog">
              <StyledTab
                icon={<HiOutlineNewspaper style={{ fontSize: "1.4rem" }} />}
                label="Blog"
              />
            </Link>
            <Link href="/contacto">
              <StyledTab
                icon={<RiMailSendLine style={{ fontSize: "1.4rem" }} />}
                label="Contacto"
              />
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
