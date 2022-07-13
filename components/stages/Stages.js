import React from "react";
import Image from "next/image";
import classes from "./Stages.module.css";
import Carousel from "./Carousel.js";
import resim1 from "../../public/stages1.png";
import resim2 from "../../public/stages2.png";
import resim3 from "../../public/stages3.png";

const stages = () => {
  return (
    <div className={classes.header}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={classes.stages}>STAGES</div>

      <div className={classes.sliders}>
        <div className={classes.firstslider}>
          <Image src={resim1} width={190} height={123} />
        </div>
        <div className={classes.secondslider}>
          <Image src={resim2} width={448} height={290} />
        </div>
        <div className={classes.thirdslider}>
          <Image src={resim3} width={190} height={123} />
        </div>
      </div>
      <div className={classes.numbers}>
        <a>1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
      </div>
      <div className={classes.sli_title}>Transfer</div>
      <div className={classes.sli_desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquam
        nesciunt eligendi repellendus nihil quos ut quo sit necessitatibus
        magnam?
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default stages;
