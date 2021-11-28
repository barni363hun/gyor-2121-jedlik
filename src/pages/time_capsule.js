import * as React from "react";
import Layout from "../components/Layout";
import gyor2121promo from "../images/gyor2121promo.mp4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ArticlePage = () => {
  return (
    <Layout>
      <Container>
        <Row className="text-center">
          <h2>Time capsule to the future!</h2>
        </Row>
        <Row>
          <video controls>
            <source src={gyor2121promo} type="video/mp4" />
          </video>
        </Row>
      </Container>
    </Layout>
  );
};

export default ArticlePage;
