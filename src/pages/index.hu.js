import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { useLocalization } from "gatsby-theme-i18n";

const IndexPage = () => {
  const { locale, config, defaultLang } = useLocalization();

  return (
    <Layout>
      <h1>heloo world!</h1>
      <p>{process.env.WEB_URL}</p>
    </Layout>
  );
};

export default IndexPage;
