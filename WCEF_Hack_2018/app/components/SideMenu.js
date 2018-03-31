import React from 'react';
import { Button, ListGroup, ListGroupItem, Modal, Row, Col, Grid, SplitButton, MenuItem } from 'react-bootstrap';

const SideMenu = ({ currentMenu, toggleMenu, showModal, toggleModal }) => {
  return (
    <div>
      <Modal show={showModal} onHide={() => toggleModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>New ballot</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <h3>Options</h3>
          <p>(Up to 10 strings. Under 32 characters. Blank fields are not counted)</p>
          <input placeholder="0" />
          <input placeholder="1" />
          <input placeholder="2" />
          <input placeholder="3" />
          <input placeholder="4" />
          <input placeholder="5" />
          <input placeholder="6" />
          <input placeholder="7" />
          <input placeholder="8" />
          <input placeholder="9" />
          <h3>Ballot start time and date</h3>
          <input placeholder="yyyymmddhh" />
          <br />
          <br />
          <SplitButton title="Duration" >
            <MenuItem eventKey="1">1 Hour</MenuItem>
            <MenuItem eventKey="2">8 Hours</MenuItem>
            <MenuItem eventKey="3">24 Hours</MenuItem>
            <MenuItem eventKey="4">48 Hours</MenuItem>
          </SplitButton>
          <h3>Introduction</h3>
          <p>What would you like to tell participants before they vote?</p>
          <input placeholder="Under 256 characters" />

          <h3>Security settings</h3>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" />
            <label class="form-check-label">&nbsp;Verify face&nbsp;</label>
            <input type="checkbox" class="form-check-input" />
            <label class="form-check-label">&nbsp;Validate ID&nbsp; </label>
          </div>
          <p>Custom verification endpoint (Documentation <a href="#">here</a>)</p>
          	<input placeholder="https://your_endpoint_url" /><br></br>
          	<br />
          <Button>Deploy contract</Button>
        </Modal.Body>
      
      </Modal>
      <br />
      <h2>Ballot IDs</h2>
      <br />
      <ListGroup>
        <ListGroupItem
          href="#"
          active={currentMenu === "bridges"}
          onClick={() => toggleMenu("bridges")}
          style={{"background-color":"white"}}
        >
          #54b967
        </ListGroupItem>
        <ListGroupItem className="newbtn" onClick={() => toggleModal(!showModal)}>
          <span style={{"color":"white"}}>New ballot</span>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default SideMenu;
