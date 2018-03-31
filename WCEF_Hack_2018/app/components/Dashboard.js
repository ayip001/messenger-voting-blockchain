import React from 'react';
import Propy from './Propy';
import SideMenu from './SideMenu.js';
import { Row, Col } from 'react-bootstrap';

class Dashboard extends React.Component {
  constructor () {
    super();
    this.state = {"a":6,"b":0,"c":2};
    this.inca = this.inca.bind(this);
    this.incb = this.incb.bind(this);
    this.incc = this.incc.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  };

  inca (a) {
    this.setState({a});
  };

  incb (b) {
    this.setState({b});
  };

  incc (c) {
    this.setState({c});
  };

  toggleModal (showModal) {
    this.setState({showModal});
  };

  render () {
    const { a, b, c, showModal } = this.state;

    return (
      <Row className="show-grid">
        <Col xs={12} md={4}>
          <SideMenu
            currentMenu={"haha"}
            toggleMenu={() => {}}
            showModal={showModal}
            toggleModal={this.toggleModal}
          />
        </Col>
        <Col xs={12} md={8}>
          <h2>#54b967</h2>
          <div className="dashboardPanels" style={{'padding-left':'40px'}}>
            <br />
            <h3>Link to client</h3>
            <a href="m.me/stargazeryt?ref=Welcome%20message">m.me/stargazeryt?ref=Welcome%20message</a>
            <br />
            <h3>QR code to link</h3>
            <br />
            <Propy />
            <h3>Contract address</h3>
            <a href="https://ropsten.etherscan.io/address/0x54b967b9f5bbdc149d95485e23a9f180eb05c59e">0x54b967b9f5bbdc149d95485e23a9f180eb05c59e</a>
            <table style={{'width': '25%', 'text-align': 'left'}}>
              <tr>
                <td>a</td>
                <td>8</td>
              </tr>
              <tr>
                <td>b</td>
                <td>0</td>
              </tr>
              <tr>
                <td>c</td>
                <td>1</td>
              </tr>
            </table>

            <br />
            <br />
            <br />
            <br />
          </div>
        </Col>
      </Row>
    );
  };
};

export default Dashboard;
