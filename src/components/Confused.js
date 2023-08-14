import React from 'react'
import {Card, Container,Col, Row, Button} from "react-bootstrap";
import {Play} from 'react-bootstrap-icons';
const Confused = () => {
  return (
    <>
    <Card className='confused-card'>
    <Container>
    <Row>
    <Col lg={8} md={8}>
    <div  className='header-part'>
    <h1 className='header-h1'>Still Confused ??</h1>
    <p className='tagline-p'>We offer a demo or trial version that allows you to get a feel for the course content and delivery method. This can be a great way to see if the course is a good fit for you before making a purchase.</p>
    </div>
    </Col>
    <Col lg={4} md={4}>
    <Button 
      variant="primary" size='lg' className='watch-vid'
      style={{ backgroundColor: '#CB8461', border: 'none', marginLeft:'100px',marginTop:'80px'}}   
    
    >
     <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
             >
              Watch Free Video  &nbsp;
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              
             
            >
             <Play/>
            </a>
     
    </Button>
    </Col>

    </Row>
    </Container>
    </Card>
    </>
  )
}

export default Confused
