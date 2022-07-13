import React from "react";
import classes from "./Form.module.css";

import contactman from "../../public/contactman.png";

import Image from "next/image";
const FormAll = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.person}>
        <Image src={contactman} alt="mancontact" width={415} height={525} />

        <div className={classes.button}>CONTACT US</div>
      </div>
      <div className={classes.form}>
        <label>FULL NAME</label>
        <input
          style={{
            borderRadius: "12px",
            width: "100%",
            height: "50px",
            border: "0px",
          }}
        />
        <label>TELEPHONE NUMBER </label>
        <input
          style={{
            borderRadius: "12px",
            width: "100%",
            height: "50px",
            border: "0px",
          }}
        />
        <label>E-MAIL </label>
        <input
          style={{
            borderRadius: "12px",
            width: "100%",
            height: "50px",
            border: "0px",
          }}
        />
        <label>MESSAGE </label>
        <textarea
        rows={7}
          style={{
            borderRadius: "12px",
            width: "100%",
            
            border: "0px",
          }}
        />
      </div>
    </div>
  );
};

export default FormAll;
