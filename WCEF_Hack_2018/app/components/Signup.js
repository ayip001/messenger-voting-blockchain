import React from 'react';
import { Button } from 'react-bootstrap';

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {"step":0};
    this.handleNextState = this.handleNextState.bind(this);
    const { toggleLogin } = this.props;
  };

  handleNextState () {
    this.setState({"step": this.state.step + 1});
  };

  render () {
    return (
      <div className="centered">
        <h2>Ballot history</h2>
        <br />
        <br />
        <h3>Ballot #0fD35A</h3>
        <br />
        <a href="https://ropsten.etherscan.io/address/0x0fd35ac910f80a922f5cdbcf4fcbff13d1576337">Etherscan</a>
        <table style={{'width': '25%', 'text-align': 'left'}}>
          <tr>
            <td>option 1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>option 2</td>
            <td>0</td>
          </tr>
        </table>
        <br />
        <br />
      </div>
    );
  };
};

export default Signup;
