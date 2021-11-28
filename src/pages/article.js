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
          <h2>Győr is waiting for you!</h2>
        </Row>
        <Row>
          <p>
            What is that? Has it been a part of the national map, a defining
            settlement of our economy, culture and history?
          </p>
          <p>
            This city is none other than the now 850-year-old Audi Győr. As a
            result of European Union programs, among others, serious
            modernization processes have taken place in the last 10 years.
          </p>
          <p>
            The 7G internet service is available to everyone free of charge,
            which is already suitable for transmitting holograms. Once a
            hologram, a 21st century museum has been created on the site of the
            old biscuit factory, which, after standing empty for 73 years and
            then becoming a social home, has now been finally demolished. The
            on-site facility will open on August 4, 2121. Visits to Győr chips
            are free, as are student and retirement groups. The primary purpose
            of the museum is to showcase the outbreak of the Civil War in 2045
            and its subsequent consolidation. The main attraction of the place
            is the holographic reconstruction of the battle of Tatabánya, which
            is screened every Friday at 5 p.m.
          </p>
          <p>
            They supplemented the Covid Museum. In addition to covid-19 and 42,
            an interactive section has been opened to illustrate the events,
            data and development of the covid-86 epidemic. Anyone can apply for
            the (Nobel Prize winning) smart vaccine developed by Katalin Karikó
            and her development team on site.
          </p>
          <p>
            On the opening day, the mayor of the city, Dr. Árpád Koltay, also
            paid tribute, including the following:
          </p>
          <p>
            "It is important to remember with respect the heroes who served the
            interests of the population even in the most difficult times, even
            at the cost of their lives!"
          </p>
          <p>
            More than one million visited the robotic bankruptcy from ETO Park.
            Within the framework of the tournaments, robots fight each other, in
            two teams, or even in a 1-1 lineup, over the entire area of ​​the
            late plaza. Spectators can even get up close and personal with every
            moment of the match.
          </p>
          <p>
            According to surveys by the Central European Tourist Agency, Győr is
            the 5th most interesting city in Central Europe, currently holding
            923 tourist credits (TC) for all ages.
          </p>
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
