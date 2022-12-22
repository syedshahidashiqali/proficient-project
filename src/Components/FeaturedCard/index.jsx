import styles from "./index.module.scss";
import { Button } from "react-bootstrap";

export default function FeaturedCard({ img, title, price, btnText }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imgWrapper}>
        <img className="img-fluid" src={img} alt="card" />
      </div>
      <div className={styles.textWrapper}>
        <h6>{title}</h6>
        <span>{price}</span>
        <Button>{btnText}</Button>
      </div>
    </div>
  );
}