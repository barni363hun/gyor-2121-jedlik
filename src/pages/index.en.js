import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { useLocalization } from "gatsby-theme-i18n";
import { LocalesList } from "gatsby-theme-i18n";

const IndexPage = () => {
  const { locale, config, defaultLang } = useLocalization();

  return (
    <Layout>
      <h1>heloo world!</h1>
      <img src="https://i.ibb.co/grXGxBw/new-gyor-logo.png" alt="gyor" />
      <StaticImage src="../images/icon.png" alt="icon" placeholder="blurred" />
      <Button>magyarrr {locale}</Button>
      <a href={process.env.WEB_URL}></a>
      <p>Used lang: {defaultLang}</p>
      <p>{JSON.stringify(config, null, 2)}</p>

      <p>
        <LocalesList />
      </p>
    </Layout>
  );
};

export default IndexPage;
