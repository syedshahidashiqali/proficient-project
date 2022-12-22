import styles from "./index.module.scss";
import midBgImg from "../../assets/mid-bg.png";

export default function TopBanner() {
  return (
    <div className={styles.bannerWrapper}>
      <img className="img-fluid" src={midBgImg} alt="" />
      <span>Featured Product</span>
      <span>Buy Now</span>
    </div>
  );
}