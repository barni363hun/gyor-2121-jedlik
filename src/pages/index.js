import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Link from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import GYOR2121 from "../images/GYOR2121.mp4";

const IndexPage = () => {
  return (
    <Layout>
      <h1>heloo world!</h1>
      <p>{process.env.WEB_URL}</p>
      <video controls>
        <source src={GYOR2121} type="video/mp4" />
      </video>
    </Layout>
  );
};

export default IndexPage;
