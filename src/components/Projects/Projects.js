import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Smart city.png";
import editor from "../../Assets/Projects/Quiz.png";
import chatify from "../../Assets/Projects/vecteezy_task-and-checklist_16390548.png";
import suicide from "../../Assets/Projects/logo copy.png";
import littleOnes from "../../Assets/Projects/logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="To Do List App"
              description="I am excited to introduce the To Do List App, a mobile application designed to help users efficiently manage their tasks with ease. With a focus on simplicity and user-friendliness, this app provides an intuitive interface and robust functionality, making task management seamless for everyone."
              ghLink="https://github.com/arvind-04/To-Do-List"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={littleOnes}
              isBlog={false}
              title="LittleOnes"
              description="LittleOnes is a vibrant online platform dedicated to providing parents with a curated selection of high-quality childcare products. Built with HTML, CSS, and JavaScript, our user-friendly website makes shopping for your little ones simple and enjoyable."
              ghLink="https://github.com/arvind-04/LittleOnes.github.io"
              demoLink="https://littleones-1.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quiz app"
              description="I am thrilled to present the Quiz App, an interactive platform designed for both teachers and students to enhance learning through engaging quizzes. This app facilitates a collaborative learning environment where teachers can create quizzes, and students can test their knowledge while receiving immediate feedback."
              ghLink="https://github.com/arvind-04/Quiz-APP"
              demoLink="https://github.com/arvind-04/Quiz-APP"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Smart City Website"
              description="I am excited to introduce Smart City, a comprehensive website dedicated to showcasing the government’s Smart City Mission. This project aims to inform and engage citizens by providing detailed insights into the initiatives and developments within smart cities across the country."
                ghLink="https://github.com/arvind-04/Smart-City-Website"
              demoLink="https://smartcity-1.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Educom"
              description="I’m excited to introduce Educom, an innovative online learning platform designed to empower users through a diverse range of courses. With Educom, learners can easily purchase and access a variety of subjects, tailored to suit all levels of expertise."
              ghLink="https://educom-edu.netlify.app"
              demoLink="https://github.com/arvind-04/Smart-City-Website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
