import styles from "./index.module.scss";
import { InputGroup, Form, Button, Container, Row, Col } from "react-bootstrap";
import line2 from "../../assets/line2.png";

export default function Subscribe() {
  return (
    <div className={styles.subWrapperMain}>
      <div className={styles.subWrapper}>
        <div className={styles.textWrapper}>
          <h6>subscribe to our newsletter</h6>
          <p>Get the latest updates on new products and sales</p>
          <InputGroup className={styles.inputGroup}>
            <Form.Control
              placeholder="Your Email Address"
            />
            <Button variant="outline-secondary">
              Explore More
            </Button>
          </InputGroup>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <img className="img-fluid" src={line2} alt="" />
      </div>
    </div>
  );
}