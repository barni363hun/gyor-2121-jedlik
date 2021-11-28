import * as React from "react";
import HuLayout from "../../components/hu/HuLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ArticlePage = () => {
  return (
    <HuLayout>
      <Container>
        <Row className="text-center">
          <h2>Időkapszula a jövőnek!</h2>
        </Row>
        <Row></Row>
      </Container>
    </HuLayout>
  );
};

export default ArticlePage;
