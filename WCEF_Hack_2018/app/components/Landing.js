import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

const Landing = () => (
  <Row>
    <Col xs={10} md={8} xsOffset={1} mdOffset={2}>
      <br />
      <br />
      <br />
      <h1 className="centered">Transparent. Accessible. Open.</h1>
      <br />
      <h3 className="centered">Enabled by Google Vision API and Facebook Messenger.</h3>
      <br />
      <br />
      <div className="centered">
        <Link to="/signup"><Button className="getstarted"><span style={{"color":"white"}}>Get started</span></Button></Link>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Col>
  </Row>
);

export default Landing;
