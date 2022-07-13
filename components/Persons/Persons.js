import React from "react";
import classes from "../Persons/Persons.module.css";
import man1 from "../../public/man1.png";
import man2 from "../../public/man2.png";
import man3 from "../../public/man3.png";
import man4 from "../../public/man4.png";
import Image from "next/image";
const Persons = () => {
  return (
    <div className={classes.backdiv}>
      <div className={classes.cards}>
        <div className={classes.personsback}>
      <Image src={man1} alt="man1" width={220} height={332} />
          <div className={classes.box}>
            <span className={classes.title}>HAIR TRANSPLANT</span>
            <div className={classes.divider}></div>
            <div className={classes.button}>
              <span className={classes.buttontype}>DISCOVER</span>
            </div>
          </div>
        </div>
      </div>

      <div  className={classes.cards}>
        <div className={classes.personsback}>
          <Image src={man2} alt="man1" width={220} height={332} />
          <div className={classes.box}>
            <span className={classes.title}>BEARD TRANSPLANT</span>
            <div className={classes.divider}></div>

            <div className={classes.button}>
              <span className={classes.buttontype}>DISCOVER</span>
            </div>
          </div>
        </div>
      </div>

      <div  className={classes.cards}>
      <div className={classes.personsback}>
          <Image src={man3} alt="man1" width={220} height={332} />
        <div className={classes.box}>
          <span className={classes.title}> AFRO TYPE </span>
          <div className={classes.divider}></div>

          <div className={classes.button}>
            <span className={classes.buttontype}>DISCOVER</span>
          </div>
        </div>
        </div>
      </div>

      <div  className={classes.cards}>
      <div className={classes.personsback}>
          <Image src={man4} alt="man1" width={220} height={332} />
        <div className={classes.box}>
          <span className={classes.title}>WOMAN</span>
          <div className={classes.divider}></div>

          <div className={classes.button}>
            <span className={classes.buttontype}>DISCOVER</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Persons;
