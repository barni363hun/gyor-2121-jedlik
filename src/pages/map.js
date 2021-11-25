import React, { useState } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Bezier2 } from "react-bootstrap-icons";

// import MapPic1 from "../images/CityMap/Pic1.jpg";
// import MapPic2 from "../images/CityMap/Pic2.jpg";
// import MapPic3 from "../images/CityMap/Pic3.jpg";
// import MapPic4 from "../images/CityMap/Pic4.jpg";
// import MapPic5 from "../images/CityMap/Pic5.jpg";

const MapPage = () => {
  const [place, setPlace] = useState(1);

  function nextPlace() {
    if (place < 5) {
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
      default:
        return "something";
    }
  }

  return (
    <Layout>
      <Container>
        <Row className="m-2 text-center">
          <h2>What is it like to live in our city?</h2>
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
            <StaticImage
              src="../images/CityImg/Pic1.jpg"
              className={getDisp(1) + " CityImg"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../images/CityImg/Pic2.jpg"
              className={getDisp(2) + " CityImg"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../images/CityImg/Pic3.jpg"
              className={getDisp(3) + " CityImg"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../images/CityImg/Pic4.jpg"
              className={getDisp(4) + " CityImg"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../images/CityImg/Pic5.jpg"
              className={getDisp(5) + " CityImg"}
              placeholder="blurred"
            ></StaticImage>
          </Col>
          <Col className="p-0">
            <StaticImage
              src="../images/CityMap/Pic1.png"
              className={getDisp(1) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../images/CityMap/Pic2.png"
              className={getDisp(2) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../images/CityMap/Pic3.png"
              className={getDisp(3) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../images/CityMap/Pic4.png"
              className={getDisp(4) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
            <StaticImage
              src="../images/CityMap/Pic5.png"
              className={getDisp(5) + " CityMap"}
              placeholder="blurred"
            ></StaticImage>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default MapPage;
