import * as React from "react";
import Layout from "../components/Layout";
import gyor2121promo from "../images/gyor2121promo.mp4";

const ArticlePage = () => {
  return (
    <Layout>
      <h2>Győr is waiting for you!</h2>
      <video controls>
        <source src={gyor2121promo} type="video/mp4" />
      </video>
    </Layout>
  );
};

export default ArticlePage;
