import React from "react";
import classes from "./About.module.css";
import aboutus from "../../public/aboutus.png";

import Image from "next/image";
const About = () => {
  return (
    <div className={classes.back}>
      <div className={classes.comp}>
        <div className={classes.header}> ABOUT US </div>
        <div className={classes.desc}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel aliquam
          facilis aperiam vero sit veniam quos quae cum a in!
        </div>
      </div>
      <div className={classes.img}>
        <Image src={aboutus} alt="aboutus" width={627} height={393} />
      </div>
    </div>
  );
};

export default About;
