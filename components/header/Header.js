import React from "react";
import classes from "./Header.module.css";
import logo from "../../public/logo.png";

import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import linkedin from "../../public/linkedin.png";
import whatsapp from "../../public/whatsapp.png";
import youtube from "../../public/youtube.png";
import twitter from "../../public/twitter.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
import Image from "next/image";
const Header = () => {
  return (
    // diller
    <div >
      <div className={classes.wrapper}>
        <div className={classes.arrow}>
          <span className={classes.en}>en</span>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
        {/* icon renk değişecek */}
        <div className={classes.iconswrapper}>
          <div className={classes.follow}>
            <Image src={instagram} width={20} height={25} alt="instagram" />
            <Image src={facebook} width={20} height={25} alt="facebook" />
            <Image src={twitter} width={20} height={25} alt="twitter" />
            <Image src={youtube} width={20} height={25} alt="youtube" />
            <Image src={linkedin} width={20} height={25} alt="linkedin" />
          </div>
          <div className={classes.divider}></div>
          <Image src={whatsapp} width={37} height={37} alt="whatsapp" />
        </div>

        {/* sosyal medya ikonları  */}

        {/* hoi logo */}
      </div>
      <div className={classes.logo}>
        <Image src={logo} width={155} height={105} alt="hoilogo" />
      </div>
    </div>
  );
};

export default Header;
