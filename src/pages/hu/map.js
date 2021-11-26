import React, { useState } from "react";
import HuLayout from "../../components/hu/HuLayout";
import { StaticImage } from "gatsby-plugin-image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Bezier2 } from "react-bootstrap-icons";

const MapPage = () => {
  const [place, setPlace] = useState(1);

  function nextPlace() {
    if (place < 6) {
      setPlace(place + 1);
    } else {
      setPlace(1);
    }
  }
  function getDisp(num) {
    if (num == place) {
      return "";
    } else {
      return "d-none";
    }
  }

  function getTitle() {
    switch (place) {
      case 1:
        return "A relaxing walk on the riverside";
      case 2:
        return "Cycling along the Raab";
      case 3:
        return "CyberTrain lines through the city";
      case 4:
        return "The St. Imre Pedestrian Street";
      case 5:
        return "A side view of Móricz Zsigmond quay";
      case 6:
        return "Matias hotel and the Baross street at night";
      default:
        return "A relaxing walk on the riverside";
    }
  }
  function getDesc() {
    switch (place) {
      case 1:
        return "something";
      case 2:
        return "dsa";
      case 3:
        return "dsa";
      case 4:
        return "dsa";
      case 5:
        return "dsa";
      case 6:
        return "dsa";
      default:
        return "something";
    }
  }

  return (
    <HuLayout>
      <Container>
        <Row className="m-2 text-center">
          <h2>Ismerd meg milyen a városunkban élni!</h2>
        </Row>
        <Row>
          <Col md="auto" className="m-2 d-flex justify-content-center">
            <h3>
              <Bezier2 className={getDisp(3)} /> {getTitle()}
            </h3>
          </Col>
          <Col></Col>
          <Col md="auto" className="m-2 d-flex justify-content-center">
            <span class="kave-line"></span>
            <Button
              variant="outline-dark"
              className="kave-btn"
              onClick={nextPlace}
            >
              Get next place
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{getDesc()}</p>
          </Col>
          <Col className="p-0">
            <a
              target="_blank"
              href={
                process.env.WEB_URL +
                "/static/f2760f52af41cab289a467ee500f2e29/f1ed6/Pic1.webp"
              }
            >
              <StaticImage
                src="../../images/CityImg/Pic1.jpg"
                className={getDisp(1) + " CityImg"}
                placeholder="blurred"
              ></StaticImage>
            </a>
            <a
              target="_blank"
              href={
                process.env.WEB_URL +
                "/static/f7055390ea1d0bc983d516a581cf1125/58b9f/Pic2.webp"
              }
            >
              <StaticImage
                src="../../images/CityImg/Pic2.jpg"
                className={getDisp(2) + " CityImg"}
                placeholder="blurred"
              ></StaticImage>
            </a>
            <a
              target="_blank"
              href={
                process.env.WEB_URL +
                "/static/7b19345a0aa48b68cd20e048fc9bea31/58556/Pic3.webp"
              }
            >
              <StaticImage
                src="../../images/CityImg/Pic3.jpg"
                className={getDisp(3) + " CityImg"}
                placeholder="blurred"
              ></StaticImage>
            </a>
            <a
              target="_blank"
              href={
                process.env.WEB_URL +
                "/static/c4bdf8678dc21625b114a37cb7e495e5/58b9f/Pic4.webp"
              }
            >
              <StaticImage
                src="../../images/CityImg/Pic4.jpg"
                className={getDisp(4) + " CityImg"}
                placeholder="blurred"
              ></StaticImage>
            </a>
            <a
              target="_blank"
              href={
                process.env.WEB_URL +
                "/static/2bdbf8d5c9be0e652b7e05a6061eec45/f95b2/Pic5.webp"
              }
            >
              <StaticImage
                src="../../images/CityImg/Pic5.jpg"
                className={getDisp(5) + " CityImg"}
                placeholder="blurred"
              ></StaticImage>
            </a>
            <a
              target="_blank"
              href={
                process.env.WEB_URL +
                "/static/1647e2c95250f18e18c47431e836c265/67b0d/Pic6.webp"
              }
            >
              <StaticImage
                src="../../images/CityImg/Pic6.png"
                className={getDisp(6) + " CityImg"}
                placeholder="blurred"
              ></StaticImage>
            </a>
          </Col>
          <Col className="p-0">
            <StaticImage
              src="../../images/MPic1.png"
              className={getDisp(1) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../../images/MPic2.png"
              className={getDisp(2) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../../images/MPic3.png"
              className={getDisp(3) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../../images/MPic4.png"
              className={getDisp(4) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../../images/MPic5.png"
              className={getDisp(5) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../../images/MPic6.png"
              className={getDisp(6) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
          </Col>
        </Row>
      </Container>
    </HuLayout>
  );
};

export default MapPage;
