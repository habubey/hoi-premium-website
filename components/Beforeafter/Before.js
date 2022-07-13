import React from "react";
import classes from "./Before.module.css";
import before from "../../public/before.png";
import Image from "next/image";

const Before = () => {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.title}>
          <div className={classes.before}>
            BEFORE
            <div className={classes.after}> AFTER</div>
          </div>
          <div className={classes.image}>
            <Image src={before} alt="before" width={200} height={200} />
          </div>
        </div>
        <div className={classes.divider}></div>
        <div>
          <span className={classes.hairtrans}>HAIR TRANSPLANT</span>
         <div className={classes.button}>
          DISCOVER 
        </div> 
        </div>

      </div>
    </div>
  );
};

export default Before;
