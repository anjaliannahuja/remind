import React from 'react';
import { Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

const text = {
  'padding': '15px',
  'fontFamily': 'Trebuchet MS, Helvetica, sans-serif',
  'color':'white'
}

const input = {
  'padding-left': '15px',
  'padding-bottom': '15px',
  'width': '250px'
}

const button = {
  'margin-left': '15px'
}

class Verify extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      verificationCode: ''
    }

    this.onChange = this.onChange.bind(this);
    this.verify = this.verify.bind(this);

  }

  onChange(e) {
    this.setState({
      verificationCode: e.target.value
    });
  }

  verify() {
    this.props.onVerify(this.state.verificationCode);

  }

  render () {
    return (<div>
      <Header size='medium' style={text}> A verification code was sent to your number. Enter your code below:</Header>
      <Input style={input} placeholder='Enter Verification Code...' value={this.state.verificationCode} onChange={this.onChange}></Input>
      <Button style={button} inverted color='black' onClick={this.verify}>Verify</Button>
    </div>)
  }
}


export default Verify;