import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HuLayout from "../../components/hu/HuLayout";
import GYOR2121 from "../../images/GYOR2121.mp4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const HuIndexPage = () => {
  return (
    <HuLayout>
      <Container>
        <Row className="text-center">
          <h1>hello world!</h1>
        </Row>
        {/* <p>{process.env.WEB_URL}</p> */}
        <Row className="d-flex justify-content-center">
          <video controls>
            <source src={GYOR2121} type="video/mp4" />
          </video>
        </Row>
      </Container>
    </HuLayout>
  );
};

export default HuIndexPage;
