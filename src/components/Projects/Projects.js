import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Smart city.png";
import editor from "../../Assets/Projects/Quiz.png";
import chatify from "../../Assets/Projects/vecteezy_task-and-checklist_16390548.png";
import suicide from "../../Assets/Projects/logo copy.png";
import littleOnes from "../../Assets/Projects/logo.png";
import Hotel from './../../Assets/hotel.png';
import EnergyMonitor from './../../Assets/Projects/energy.png';
import Agricycle from './../../Assets/Projects/agicycle.png';
import UMSProject from './../../Assets/Projects/ums.png';
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
    imgPath={EnergyMonitor}
    isBlog={false}
    title="Energy Monitor Website"
    description="I developed a Laravel-based web application for monitoring soil moisture and UV radiation levels to support sustainable farming practices. The platform provides real-time data visualization and analytics, enabling users to make informed agricultural decisions. This project demonstrates my backend and frontend skills using PHP, Laravel, and data interpretation."
    ghLink="https://github.com/arvind-04/weather_laravel"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={Agricycle}
    isBlog={false}
    title="AgriCycle Android App"
    description="I created an Android application in Kotlin named AgriCycle, aimed at supporting farmers by providing a digital platform for crop information, weather updates, and equipment sharing. It follows modern Android architecture with features like MVVM, LiveData, and Room Database. This project highlights my proficiency in mobile app development and user-centric design."
    ghLink="https://drive.google.com/file/d/1U7Sb81uVRtSc56l0NiAvdKkYRmYJWE-I/view?usp=share_link"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={UMSProject}
    isBlog={false}
    title="User Management System (UMS)"
    description="I built a User Management System in Java using AWT to provide functionalities such as user registration, login, profile management, and role-based access control. This desktop application demonstrates my knowledge of Java programming, GUI development with AWT, and handling user data securely."
    
  />
</Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotel}
              isBlog={false}
              title="Hotel Website"
              description="I developed a responsive React website for Hotel Shree Ji Palace, a luxurious hotel in Udaipur, Rajasthan. The site features components like About Us, Amenities, Services, Rooms, and Testimonials, offering a comprehensive showcase of the hotel. It utilizes React hooks and modern concepts for smooth functionality and user experience. This project highlights my skills in web development and design."
              ghLink="https://github.com/arvind-04/HotelShreeJiPalace"
              demoLink="http://hotelshreejipalace.online"
            />
          </Col>
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
