import React from 'react';
import { Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

const text = {
  'padding': '15px',
  'fontFamily': 'Trebuchet MS, Helvetica, sans-serif',
  'color':'white'
}

const input = {
  'width': '250px'
}

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: ''
    }

    this.onChange = this.onChange.bind(this);
    this.register = this.register.bind(this);

  }

  onChange(e) {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  register() {
    this.props.onRegister(this.state.phoneNumber);

  }

  render () {
    return (<div>
      <Container style={text}>
      Welcome to Remind! Enter your 10-digit phone number below to register and start scheduling text reminders. <br/> <br/>
        <Input icon='phone' iconPosition='left' style={input} placeholder='xxx-xxx-xxxx' value={this.state.phoneNumber} onChange={this.onChange}></Input> <br/> <br/>
        <Button inverted color='black' onClick={this.register}>Register</Button>
      </Container>
    </div>)
  }
}


export default Register;