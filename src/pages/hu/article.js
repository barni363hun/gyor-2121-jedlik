import * as React from "react";
import HuLayout from "../../components/hu/HuLayout";
import gyor2121promo from "../../images/gyor2121promo.mp4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ArticlePage = () => {
  return (
    <HuLayout>
      <Container>
        <Row className="text-center">
          <h2>Győr rád vár!</h2>
        </Row>
        <Row>
          <p>
            Mi az? Régóta az országos térkép része, gazdaságunk, kultúránk,
            történelmünk meghatározó települése?
          </p>
          <p>
            Ez a város nem más, mint a most 850 éves Audi Győr. Többek között
            Európai Uniós programok hatására, komoly modernizációs folyamatok
            zajlottak le az elmúlt 10 évben.
          </p>
          <p>
            Mindenki számára ingyenesen hozzáférhető a 7G-s
            internetszolgáltatás, mely már hologramok közvetítésére is alkalmas.
            Ha már hologram, létrejött a 21. század múzeum, a régi kekszgyár
            helyén, mely azután, hogy 73 évig üresen állt, majd szociális
            otthonná vált, most végleg elbontásra került. A helyén található
            létesítmény 2121 augusztus 4.-én nyitja meg kapuit, látogatása a
            Győr-chippel rendelkezőknek ingyenes, csakúgy mint a diák- és
            nyugdíjascsoportoknak. A múzeum célja elsődlegesen a 2045-ben kitört
            polgárháború és az azt követő konszolidáció bemutatása. A hely
            legfőbb látványossága, a minden péntek 5 órakor levetítésre kerülő
            Tatabányai csata hologramos rekonstruációja.
          </p>
          <p>
            Kiegészítették a Covid-múzeumot is. A covid-19 és 42 mellett már a
            covid-86-os járvány eseményeit, adatait, alakulását szemléltető
            interaktív részleg is megnyílt. A helyszínen bárki igényelheti a
            Karikó Katalin, és fejlesztőcsoportja által kifejlesztett
            (Nobel-díjas) okosvakcinát.
          </p>
          <p>
            A nyitónapon a város polgármestere, Dr. Koltay Árpád is tiszteletét
            tette, többek között a következőket mondta:
          </p>
          <p>
            “Fontos, hogy tisztelettel emlékezzünk azokra a hősökre, akik a
            legnehezebb időkben is a lakosság érdekeit szolgálták, akár az
            életük árán is!”
          </p>
          <p>
            Több mint egymillióan látogatták az ETO parkból lett
            robotpankrációt. A bajnokságok keretein belül robotok, két
            csapatban, vagy akár 1-1-es felállásban küzdenek meg egymással, a
            néhai pláza teljes területén. A nézők akár testközelből izgulhatják
            végig a mérkőzés minden momentumát.
          </p>
          <p>
            A Central European Turistical Agency felmérései szerint Győr
            közép-Európa 5. legérdekesebb városa, minden korosztály számára,
            jelenleg 923 turistical credittel (TC)-vel rendelkezik.
          </p>
        </Row>
        <Row>
          <video controls>
            <source src={gyor2121promo} type="video/mp4" />
          </video>
        </Row>
      </Container>
    </HuLayout>
  );
};

export default ArticlePage;
