import * as React from "react";
import HuLayout from "../../components/hu/HuLayout";
import gyor2121promo from "../../images/gyor2121promo.mp4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ArticlePage = () => {
  return (
    <HuLayout>
      <Container>
        <Row className="text-center">
          <h2>Győr rád vár!</h2>
        </Row>
        <Row>
          <Col>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            asperiores aliquid assumenda similique! Aperiam natus voluptatibus
            amet doloribus cupiditate eaque iste assumenda voluptas
            necessitatibus commodi? Sint tenetur quas consequuntur dicta.
            Reiciendis magnam sed earum aliquid modi, eum ducimus maiores in ad
            nam esse autem laudantium recusandae aperiam sint tempore
            voluptates! Aperiam neque illo nam adipisci, delectus dolore
            assumenda corrupti molestias.
          </Col>
          <Col md="auto">
            <video controls>
              <source src={gyor2121promo} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </Container>
    </HuLayout>
  );
};

export default ArticlePage;
