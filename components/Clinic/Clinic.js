import Image from "next/image";
import React from "react";
import clinic from "../../public/clinic.png";
import classes from "./Clinic.module.css";
const Slider1 = () => {
  return (
    <div>
      <div className={classes.headlines}>
        <ul>
          <li> OPERATION ROOM </li>
          <li className={classes.selected}> CLINIC </li>
          <li> AIRPORT </li>
          <li> HOSPITAL </li>
        </ul>
      </div>
      <div className={classes.dikdörtgen1}>
        <div className={classes.group}>
          <div className={classes.text}>
            <span> Lorem ipsum dolor sit amet,. </span>
          </div>
          <div className={classes.operation}>
            OPERATION
            <div className={classes.room}>ROOM</div>
          </div>
          <div className={classes.divider}></div>

          <div className={classes.button}>
            <div className={classes.dscover}>DISCOVER</div>
          </div>
        </div>
        <div className={classes.dikdörtgen2}>
          <div>
            <Image
              src={clinic}
              alt="slider2"
              width={648}
              height={438}
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
