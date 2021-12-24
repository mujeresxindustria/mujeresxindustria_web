import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from "@material-ui/core";

import { GoHome, GoInfo } from "react-icons/go";
import { BiDotsVerticalRounded, BiDonateHeart } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const DrawerComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BiDotsVerticalRounded fontSize="large" style={{ color: "white" }} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href="/">
          <StyledMenuItem>
            <ListItemIcon style={{ minWidth: "25px" }} onClick={handleClose}>
              <GoHome />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </StyledMenuItem>
        </Link>
        <Link href="/quienesSomos">
          <StyledMenuItem>
            <ListItemIcon style={{ minWidth: "25px" }}>
              <GoInfo />
            </ListItemIcon>
            <ListItemText primary="¿Quiénes Somos?" />
          </StyledMenuItem>
        </Link>
        <Link href="/ecosistema">
          <StyledMenuItem>
            <ListItemIcon style={{ minWidth: "25px" }}>
              <BiDonateHeart />
            </ListItemIcon>
            <ListItemText primary="Ecosistema" />
          </StyledMenuItem>
        </Link>
        <Link href="/blog">
          <StyledMenuItem>
            <ListItemIcon style={{ minWidth: "25px" }}>
              <HiOutlineNewspaper />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </StyledMenuItem>
        </Link>
        <Link href="/contacto">
          <StyledMenuItem>
            <ListItemIcon style={{ minWidth: "25px" }}>
              <RiMailSendLine />
            </ListItemIcon>
            <ListItemText primary="Contacto" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
};

export default DrawerComponent;
