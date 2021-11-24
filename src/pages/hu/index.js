import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Link from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Üdv</h1>
      <img src="https://i.ibb.co/grXGxBw/new-gyor-logo.png" alt="gyor" />
      <StaticImage src="../images/icon.png" alt="icon" placeholder="blurred" />
      <Link to="../index.js">magyarrr</Link>
      <a href={process.env.WEB_URL}></a>
      <p>Used lang:</p>
    </Layout>
  );
};

export default IndexPage;
