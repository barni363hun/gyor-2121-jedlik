import React, { useState } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Button from "react-bootstrap/Button";
import Pic1 from "../images/Pic1.jpg";
import Pic2 from "../images/Pic2.jpg";
import Pic3 from "../images/Pic3.jpg";
import Pic4 from "../images/Pic4.jpg";
import Pic5 from "../images/Pic5.jpg";

const MapPage = () => {
  const [place, setPlace] = useState(1);

  function nextPlace() {
    if (place < 5) {
      setPlace(place + 1);
    } else {
      setPlace(1);
    }
  }

  function getPicture() {}

  function getTitle() {
    switch (place) {
      case 1:
        return "A relaxing walk on the riverside.";
      case 2:
        return "dsa";
      default:
        return "aasdasdassd";
    }
  }

  return (
    <Layout>
      <h2>What is it like to live in our city?</h2>
      <h3>{getTitle()}</h3>
      <Button onClick={nextPlace}>Get next place</Button>
    </Layout>
  );
};

export default MapPage;
