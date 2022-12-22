import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import FeaturedCard from "../FeaturedCard";
import cardImg from "../../assets/card.png";

export default function Featured() {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    speed: 500,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        }
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1.75,
        }
      },
      {
        breakpoint: 315,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className={styles.featuredWrapper}>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className={styles.heading}>
              <h1 className="text-center">
                <span>featured</span> products
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Slider {...settings}>
              <FeaturedCard img={cardImg} title="DTNVS" price="$15,000.00" btnText="Add To Cart" />
              <FeaturedCard img={cardImg} title="DTNVS" price="$15,000.00" btnText="Add To Cart" />
              <FeaturedCard img={cardImg} title="DTNVS" price="$15,000.00" btnText="Add To Cart" />
              <FeaturedCard img={cardImg} title="DTNVS" price="$15,000.00" btnText="Add To Cart" />
              <FeaturedCard img={cardImg} title="DTNVS" price="$15,000.00" btnText="Add To Cart" />
              <FeaturedCard img={cardImg} title="DTNVS" price="$15,000.00" btnText="Add To Cart" />
              <FeaturedCard img={cardImg} title="DTNVS" price="$15,000.00" btnText="Add To Cart" />
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
      }}
      onClick={onClick}
    />
  );
}