import styles from "./index.module.scss";
import { Container, Navbar, Button } from 'react-bootstrap';
import logoImg from "../../assets/top-logo.png";
import MyButton from '../MyButton';

function MyNavbar() {
  return (
    <div className="navbar-container">
      <Navbar expand="sm">
        <Container>
          <Navbar.Brand href="#home">
            <img className="img-fluid" src={logoImg} alt="logo" />
          </Navbar.Brand>
          <div className={styles.navbarToggler}>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="justify-content-end">
            <MyButton text="SIGN UP" />
            <MyButton text="LOG IN" isBg style={{ marginLeft: "10px" }} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;