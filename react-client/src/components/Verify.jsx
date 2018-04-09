import React from 'react';
import { Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

const text = {
  'padding': '15px',
  'fontFamily': 'Trebuchet MS, Helvetica, sans-serif',
  'color':'white'
}

const input = {
  'width': '250px'
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
      <Container style={text}>
        A verification code was sent to your number. Enter your code below:<br/><br/>
        <Input icon='key' iconPosition='left' style={input} placeholder='Verification Code' value={this.state.verificationCode} onChange={this.onChange}></Input><br/><br/>
        <Button inverted color='black' onClick={this.verify}>Verify</Button>
      </Container>
    </div>)
  }
}


export default Verify;