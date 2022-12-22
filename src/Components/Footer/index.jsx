import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/top-logo.png";
import line3 from "../../assets/line3.png";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerWrapperSub}>
        <div className={styles.textWrapper}>
          <div className={styles.left}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.right}>
            <ul>
              <li>TacticalTerminal.Net</li>
              <li>Terms of services</li>
              <li>Shipping & Returns</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className={styles.copy}>
          <p>© 2022 TacticalTerminal.Net - All Rights Reserved.</p>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <img className="img-fluid" src={line3} alt="" />
      </div>
    </div>
  );
}