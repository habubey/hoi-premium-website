import React from "react";
import classes from "./Footer.module.css";

import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import linkedin from "../../public/linkedin.png";
import whatsapp from "../../public/whatsapp.png";
import youtube from "../../public/youtube.png";
import twitter from "../../public/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={classes.back}>
      <div className={classes.wrapper}>
        <a href="">
          <Image src={whatsapp} width={37} height={37} alt="whatsapp" />
        </a>
        <div className={classes.text1}> contact us</div>
        <div className={classes.divider}></div>
        <div className={classes.follow}>
          <a href="">
            <Image src={instagram} width={20} height={25} alt="instagram" />
          </a>
          <a href="">
            <Image src={facebook} width={20} height={25} alt="facebook" />
          </a>
          <a href="">
            <Image src={twitter} width={20} height={25} alt="twitter" />
          </a>
          <a href="">
            <Image src={youtube} width={20} height={25} alt="youtube" />
          </a>
          <a href="">
            <Image src={linkedin} width={20} height={25} alt="linkedin" />
          </a>
        </div>
      </div>

      <div className={classes.text}>
        {" "}
        <span> follow us </span>{" "}
      </div>
      <div className={classes.footnav}>
        <div>
          BEARD TRANSPLANT
          <ul>
            <li>BEARD TRANSPLANT</li>
            <li>BEARD TRANSPLANT</li>
            <li>BEARD TRANSPLANT</li>
            <li>BEARD TRANSPLANT</li>
          </ul>
        </div>
        <div>
          AFRO TYPE
          <ul>
            <li>AFRO TYPE</li>
            <li>AFRO TYPE</li>
            <li>AFRO TYPE</li>
            <li>AFRO TYPE</li>
          </ul>
        </div>
        <div>
          WOMAN
          <ul>
            <li>WOMAN</li>
            <li>WOMAN</li>
            <li>WOMAN</li>
            <li>WOMAN</li>
          </ul>
        </div>
        <div>
          HAIR TRANSPLANT
          <ul>
            <li>HAIR TRANSPLANT</li>
            <li>HAIR TRANSPLANT</li>
            <li>HAIR TRANSPLANT</li>
            <li>HAIR TRANSPLANT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
