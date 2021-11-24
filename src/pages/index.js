import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>heloo world!</h1>
      <p>{process.env.WEB_URL}</p>
    </Layout>
  );
};

export default IndexPage;
