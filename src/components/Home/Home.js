import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/arvind-2 Background Removed.png";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

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
                className="img-fluid"
                style={{
                  width: "500px",             // Use quotes for values
                  height: "550px",
                  borderRadius: "50%",        // Use camelCase
                  backgroundColor: "black", // Use camelCase
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
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