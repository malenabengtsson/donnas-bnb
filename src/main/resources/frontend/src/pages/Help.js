import React, { useState } from "react";
import { UncontrolledCollapse, Button, CardBody, Card, Row } from "reactstrap";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="backGround">
      <h2
        style={{
          marginBottom: "15px",
          marginLeft: "10px",
          color: "white",
          textAlign: "center",
        }}
      >
        Frågor och svar
      </h2>
      <div>
        <Button
          color="success"
          id="registerToggler"
          style={{ marginBottom: "1rem", marginLeft: "10px" }}
        >
          Registering?
        </Button>
        <UncontrolledCollapse toggler="#registerToggler">
          <Card style={{ width: "100%", height: "auto" }}>
            <CardBody>
              Som uthyrare av bostad måste du först registrera dig och skapa ett konto hos oss. Det gör du genom att följa länken nedan och fylla i den information
              som efterfrågas. Självklart kan du registrera dig även om ditt mål endast är att hyra ett boende och inte hyra ut, och om du inte är intresserad av att 
              registrera dig alls går det fortfarande att fritt söka efter ett boende.
              <p>
                <Link to="/perform-register">Registrera dig</Link>
              </p>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div>
        <Button
          color="success"
          id="loginToggler"
          style={{ marginBottom: "1rem", marginLeft: "10px" }}
        >
          Logga in?
        </Button>
        <UncontrolledCollapse toggler="#loginToggler">
          <Card style={{ width: "100%", height: "auto" }}>
            <CardBody>
              För att logga in måste du först ha registrerat ett konto hos oss. Information om hur och var du registrerar dig finner du i fliken ovan "Registrering?"
              När registeringen är gjord kan du logga in på ditt konto. Klicka på länken nedan som tar dig vidare till vårt inloggningsformulär.
              <p>
                <Link to="/perform-login">Logga in</Link>
              </p>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div>
        <Button
          color="success"
          id="rentoutToggler"
          style={{ marginBottom: "1rem", marginLeft: "10px" }}
        >
          Hyra ut?
        </Button>
        <UncontrolledCollapse toggler="#rentoutToggler">
          <Card style={{ width: "100%", height: "auto" }}>
            <CardBody>
             Som uthyrare hos oss kan du på din profil skapa och hyra ut objekt som du önskar. Under vilka perioder, bekvämligheter, bilder, allmän information om boendet
             och kontaktuppgifter till dig som uthyrare.
             Det finns ett formulär att fylla i med den informationen som efterfrågas om objektet ni önskar hyra ut.
             Fyll i och spara så kommer ert objekt efteråt att läggas upp på vår sida och du kan under din egna profil se när någon är intresserad av att hyra er bostad.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div>
        <Button
          color="success"
          id="rentToggler"
          style={{ marginBottom: "1rem", marginLeft: "10px" }}
        >
          Söka boende?
        </Button>
        <UncontrolledCollapse toggler="#rentToggler">
          <Card style={{ width: "100%", height: "auto" }}>
            <CardBody>
             Du är några få enkla knapptryckningar från att hyra en bostad hos oss!
             På startsidan kan du söka efter en stad och datum som passar dig.
             Klicka på de objekt som intresserar dig för mer information.
             Du får mer än gärna registrera dig hos oss, men det är inget måste för att hyra en bostad, utan du kan då gå vidare som "Gäst" 
             och fylla i den information som ombeds av dig.
             Klicka boka och voíla! 
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div>
        <Button
          color="success"
          id="priceToggler"
          style={{ marginBottom: "1rem", marginLeft: "10px" }}
        >
          Priser?
        </Button>
        <UncontrolledCollapse toggler="#priceToggler">
          <Card style={{ width: "100%", height: "auto" }}>
            <CardBody>
              Priserna för ett boende kommer att visas och räknas ut samtidigt som du väljer hur många dagar du är intresserad av att hyra boendet.
              Priserna är beräknade och inga andra kostnader tillkommer utöver det som anges.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
};

export default Help;
