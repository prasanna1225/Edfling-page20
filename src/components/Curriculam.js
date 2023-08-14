import React from 'react';
import Card from 'react-bootstrap/Card';
import {Row, Col, Container,Button} from 'react-bootstrap';
import Pic from '../images/person.png';
import {Download} from 'react-bootstrap-icons';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
function Curriculam() {

  

  return (
    <>
    <Card className='card-style'>
   
    <Container>
    <Row>
        <Col lg={8} md={8}>
          <div className='header-part'>
         <h1 className='header'>Best Course Curriculum</h1>
         <p className='tagline'>"A well-designed course curriculum is like a roadmap that guides students towards their learning goals."</p>
          </div>
          <VerticalTimeline className='time-line-area'>
          <VerticalTimelineElement className='timeline-items'
          >
          
        <p className='p-2 m-2'>
        Understand the basic concepts of programming and how they apply to Python
        </p>
        
          </VerticalTimelineElement>
          <VerticalTimelineElement className='timeline-items'
          >
        <p className='p-2 m-2'>
        Write basic Python programs using correct syntax and control structures
        </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='timeline-items'
          >
        <p className='p-2 m-2'>
        Write basic Python programs using correct syntax and control structures
        </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='timeline-items'
          >
        <p className='p-2 m-2'>
        Write basic Python programs using correct syntax and control structures
        </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='timeline-items'
          >
        <p className='p-2 m-2'>
        Write basic Python programs using correct syntax and control structures
        </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='timeline-items'
          >
        <p className='p-2 m-2'>
        Write basic Python programs using correct syntax and control structures
        </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='timeline-items'
          >
        <p className='p-2 m-2'>
        Write basic Python programs using correct syntax and control structures
        </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='timeline-items'
          >
        <p className='p-2 m-2'>
        Write basic Python programs using correct syntax and control structures
        </p>
          </VerticalTimelineElement>
          </VerticalTimeline>
        </Col>
        <Col lg={4}  md={4}>
        <img className='img-style' src={Pic} alt='pic' />
        <Button
      variant="primary" size='lg'
      style={{ backgroundColor: '#CB8461', border: 'none', marginLeft:'100px'}}   
    
    >
     <a
              href="Syllabus.pdf"
              target="_blank"
              download={"Syllabus.pdf"}
              
            >
              Download PDF  &nbsp;
            </a>
            <a
              href="Syllabus.pdf"
              target="_blank"
              download={"Syllabus.pdf"}
             
            >
               <Download/>
            </a>
     
    </Button>
        </Col>
      </Row>
      </Container>
     
    </Card>
    </>
  )
}

export default Curriculam;