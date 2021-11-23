import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>heloo world!</h1>
      <img src="https://i.ibb.co/grXGxBw/new-gyor-logo.png" alt="gyor" />
      <StaticImage src="../images/icon.png" alt="icon" placeholder="blurred" />
      <Button>asddsfa</Button>
    </Layout>
  );
};

export default IndexPage;
