import React from "react";
import Layout from "../components/Layout";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import illusion from "../images/illusion.gif";

const LoadLang = () => {
  const randInt = Math.random() * 10000;

  function dsaasd() {
    setTimeout(
      () => window.open(process.env.WEB_URL + "hu", "_self"),
      randInt + 5000
    );
    return "";
  }

  return (
    <Layout>
      <Container>
        <Row className="myRow">
          <h1>We are trying to scan your language...</h1>
        </Row>
        <Row className="d-flex justify-content-center">
          <img
            className="illu"
            src={illusion}
            alt="look at the center to help us read your language"
            placeholder="blurred"
          ></img>
        </Row>
        <Row className="myRow">
          <h2>Please look at the monitor</h2>
        </Row>
      </Container>
      <div>{dsaasd()}</div>
    </Layout>
  );
};

export default LoadLang;
