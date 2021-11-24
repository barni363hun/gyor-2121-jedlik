import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { asd } from "../locales/translations/en.json";

const IndexPage = () => {
  return (
    <Layout>
      <h1>heloo world!</h1>
      <img src="https://i.ibb.co/grXGxBw/new-gyor-logo.png" alt="gyor" />
      <StaticImage src="../images/icon.png" alt="icon" placeholder="blurred" />
      <Button>magyarrr</Button>
      <a href={process.env.WEB_URL}>{asd}</a>
      <p>Used lang:</p>
    </Layout>
  );
};

export default IndexPage;
