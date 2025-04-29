import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/me Background Removed.png";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./Home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ARVIND SINGH CHOUHAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-logo"
                style={{
                  maxWidth: "50%",
                  height: "auto",
                  borderRadius: "30%",
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;


