import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

import { useParams } from 'react-router-dom';
import { projects } from './ProjectsData';

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <Container fluid className="project-detail-section" style={{ animation: 'fadeIn 0.5s ease-in-out', paddingTop: '90px' }}>
      <Container>
        <h1 className="project-heading" style={{ animation: 'slideDown 0.5s ease-in-out' }}>
          {project.title}
        </h1>
        
        {/* Gallery Section */}
        <Row className="mb-5">
          <Col>
            <h3>Gallery</h3>
            <div className="project-gallery" style={{ animation: 'fadeIn 0.8s ease-in-out' }}>
              {project.screenshots?.map((screenshot, index) => (
                <img 
                  key={index} 
                  src={screenshot} 
                  alt={`Screenshot ${index + 1}`} 
                  className="gallery-image"
                />
              ))}
            </div>
          </Col>
        </Row>
        
        {/* Tech Stack Section */}
        <Row className="mb-5">
          <Col>
            <h3>Tech Stack</h3>
            <div className="tech-stack" style={{ animation: 'fadeIn 1s ease-in-out' }}>
              {project.techStack?.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </Col>
        </Row>
        
        {/* Description Section */}
        <Row className="mb-5">
          <Col>
            <h3>About Project</h3>
            <p style={{ animation: 'fadeIn 1.2s ease-in-out' }}>{project.description}</p>
          </Col>
        </Row>
        
        {/* Action Buttons */}
        <Row>
          <Col className="text-center">
            {project.ghLink && (
              <Button variant="primary" href={project.ghLink} target="_blank" className="me-3">
                <BsGithub /> &nbsp; GitHub
              </Button>
            )}
            {project.demoLink && (
              <Button variant="primary" href={project.demoLink} target="_blank">
                <CgWebsite /> &nbsp; Live Demo
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetail;