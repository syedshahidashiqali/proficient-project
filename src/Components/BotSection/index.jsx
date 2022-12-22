import styles from "./index.module.scss";
import playImg from "../../assets/play.png";
import { useEffect, useRef } from "react";
import line1 from "../../assets/line1.png";

export default function BotSection() {
  // let lineRef = useRef(null);

  // useEffect(() => {
  //   var c = lineRef.current;
  //   var ctx = c.getContext("2d");
  //   ctx.lineWidth = 2;
  //   ctx.beginPath();
  //   ctx.moveTo(0, 50);
  //   ctx.lineTo(70, 50);
  //   ctx.lineTo(90, 25);
  //   ctx.lineTo(300, 20);
  //   ctx.stroke();
  // });

  return (
    <div className={styles.botWrapperMain}>
      <div className={styles.botWrapper}>
        <div className={styles.leftWrapper}>
          <img className="img-fluid" src={playImg} alt="" />
        </div>
        <div className={styles.rightWrapper}>
          <h5>Latest News</h5>
        </div>
      </div>
      {/* <canvas ref={lineRef} /> */}
      <div className={styles.lineWrapper}>
        <img className="img-fluid" src={line1} alt="" />
      </div>
    </div>
  );
}