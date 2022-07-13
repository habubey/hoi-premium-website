import Image from "next/image";
import React from "react";
import sac from "../../public/Katman_1.png";
import classes from "./Slider.module.css";
const Slider1 = () => {
  return (
    <div>
      <div className={classes.dikdörtgen1}>
        <div className={classes.group}>
          <div className={classes.afro}>
            <span>AFRO</span>
          </div>
          <div className={classes.type}>
            <span>TYPE</span>
          </div>
          <div className={classes.text}>
            <span> Lorem ipsum dolor sit amet,. </span>
          </div>
          <div className={classes.button1}>
            <div className={classes.button}>
              <span className={classes.dscover}>DISCOVER</span>
            </div>
          </div>
        </div>
        <div className={classes.dikdörtgen2}>
          <div>
            <Image
              src={sac}
              alt="slider2"
              width={300}
              height={300}
              layout="fill"
              style={{
                position: "relative",
                borderRadius: "80px",
                boxShadow: "-8px 6px 21px 0px rgb(0 0 0 /)",
                backgroundColor: "#fff",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
