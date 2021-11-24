import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = (Lang) => {
  return (
    <Layout>
      <h1>404</h1>
      <h2>{Lang}</h2>
    </Layout>
  );
};

export default NotFoundPage;
