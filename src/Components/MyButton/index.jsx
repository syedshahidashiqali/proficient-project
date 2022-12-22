import { Button } from 'react-bootstrap';
import styles from "./index.module.scss";

export default function MyButton({ text, isBg, style }) {
  return (
    <div
      className={isBg ? styles.btnWrapperBg : styles.btnWrapper}
      style={style}
    >
      <Button>{text}</Button>
    </div>
  );
}
